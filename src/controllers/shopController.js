
const shop = require('../models/shopModel');
const Main = require('../models/mainModel');
const Image = require("../models/imagesModel")
/*
{
shop:{
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
  
      
   
        req.body.datas.main.tip = "shop"
        req.body.datas.main.paths = pathss
        req.body.datas.main.names = namess  
        const mainData = await Main.create(req.body.datas.main) 
        req.body.datas.shop.shopId  = mainData._id
        req.body.propertyId = mainData._id
     
       
        const shopData = await shop.create(req.body.datas.shop)

        res.status(201).send({
            mainData:mainData,
            shopData:shopData,
            message: "property saved"
        })
    },
    read: async (req, res) => {
       
        const data = await shop.findOne({ shopId: req.params.id }).populate("shopId")
        const images = await Image.findOne({propertyId: req.params.id}).populate("propertyId")
        res.status(200).send({
            data,
            images
        })
    },
    update: async (req, res) => {

        const shopData = await shop.updateOne({ shopId: req.params.id }, req.body.shop)
        const mainData = await Main.updateOne({ id: req.params.id }, req.body.main)
        res.status(200).send({
            error: false,
            shopData,
            mainData,
            message: "property updated successfully"
        })
    },


    delete: async (req, res) => {
        
        const aptdata = await shop.deleteOne({ shopId: req.params.id })
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