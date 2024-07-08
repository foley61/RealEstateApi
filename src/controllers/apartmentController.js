
const Apartment = require('../models/apartmentModel');
const Main = require('../models/mainModel')
const Image = require("../models/imagesModel")
const fs = require("fs")
/*
{
apartment:{
  datas: "asdasdasd"
},
main:{
  datas: "asdasdad" 
}
}
       
      
   
     
    
     
*/
module.exports = {
    create: async (req, res) => {
        req.body.datas = JSON.parse(req.body.datas)
       
       
        const uploadedFiles = req.files;
        const savedImages = [];
        const pathss = []
        const namess = []
       await uploadedFiles.map((files) => {pathss.push(files.path); namess.push(files.originalname)})
  
      
   
        req.body.datas.main.tip = "apartment"
        req.body.datas.main.paths = pathss
        req.body.datas.main.names = namess  
        const mainData = await Main.create(req.body.datas.main) 
        req.body.datas.apartment.apartmentId = mainData._id
        req.body.propertyId = mainData._id
     
       
        const apartmentData = await Apartment.create(req.body.datas.apartment)
        res.status(201).send({
            mainData:mainData,
            apartmentData:apartmentData,
            message: "property saved"
        })
    },
    read: async (req, res) => {

        const data = await Apartment.findOne({apartmentId: req.params.id}).populate("apartmentId")

        res.status(200).send({
            data
        })
    },
    update: async (req, res) => {
       
        req.body.datas = JSON.parse(req.body.datas)
       
        const apartmentData = await Apartment.updateOne({ apartmentId: req.params.id },req.body.datas.apartment)
        const mainData = await Main.updateOne({ _id: req.params.id }, req.body.datas.main)
        res.status(200).send({
            error: false,
            apartmentData,
            mainData,
            message: "property updated successfully"
        })
    },
    imageUpdate: async(req,res)=> {
        req.body.datas = JSON.parse(req.body.datas)
        const main = await Main.findOne({_id: req.params.id})      
       
        const oldpaths = main.paths
        oldpaths.forEach(path => {
            fs.rm(path, { recursive:true }, (err) => { 
                if(err){ 
                   
                    console.error(err.message); 
                    return; 
                } 
                console.log("File deleted successfully"); 
                  
              
            }) 
        })
        const uploadedFiles = req.files;
        const savedImages = [];
        const pathss = []
        const namess = []
       await uploadedFiles.map((files) => {pathss.push(files.path); namess.push(files.originalname)})
   
       req.body.datas.paths = pathss
       req.body.datas.names = namess  
       console.log(req.body.datas)
       const mainData = await Main.updateOne({ _id: req.params.id }, req.body.datas)
        res.status(200).send({
            mainData
        })
    
    },

    delete: async (req, res) => {
        const aptdata = await Apartment.deleteOne({ apartmentId: req.params.id })
        const main = await Main.findOne({_id: req.params.id})      
       
        const paths = main.paths
        paths.forEach(path => {
            fs.rm(path, { recursive:true }, (err) => { 
                if(err){ 
                   
                    console.error(err.message); 
                    return; 
                } 
                console.log("File deleted successfully"); 
                  
              
            }) 
        })
        const maindata = await Main.deleteOne({ id: req.params.id })
      
        res.status(204).send({
            message: "Property deleted"
        })
    }
}