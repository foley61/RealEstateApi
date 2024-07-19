
const Land = require('../models/landModel');
const Main = require('../models/mainModel')
const Image = require("../models/imagesModel")

module.exports = {
    create: async (req, res) => {
        req.body.datas = JSON.parse(req.body.datas)


        const uploadedFiles = req.files;
        const savedImages = [];
        const pathss = []
        const namess = []
        await uploadedFiles.map((files) => { pathss.push(files.path); namess.push(files.originalname) })



        req.body.datas.main.tip = "land"
        req.body.datas.main.paths = pathss
        req.body.datas.main.names = namess
        req.body.datas.main.tapuDurum = req.body.datas.land.tapuDurum
        req.body.datas.main.arsaDurum = req.body.datas.land.arsaDurum
        const mainData = await Main.create(req.body.datas.main)
        req.body.datas.land.landId = mainData._id
        req.body.propertyId = mainData._id


        const LandData = await Land.create(req.body.datas.land)
        res.status(201).send({
            mainData: mainData,
            LandData: LandData,
            message: "property saved"
        })
    },
    read: async (req, res) => {

        const data = await Land.findOne({ landId: req.params.id }).populate("landId")

        res.status(200).send({
            data
        })
    },
    update: async (req, res) => {
        req.body.datas = JSON.parse(req.body.datas)
        const LandData = await Land.updateOne({ landId: req.params.id }, req.body.datas.land)
        const mainData = await Main.updateOne({ id: req.params.id }, req.body.datas.main)
        res.status(200).send({
            error: false,
            LandData,
            mainData,
            message: "property updated successfully"
        })
    },

    imageUpdate: async (req, res) => {
        req.body.datas = JSON.parse(req.body.datas)
        const main = await Main.findOne({ _id: req.params.id })

        const oldpaths = main.paths
        oldpaths.forEach(path => {
            fs.rm(path, { recursive: true }, (err) => {
                if (err) {

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
        await uploadedFiles.map((files) => { pathss.push(files.path); namess.push(files.originalname) })

        req.body.datas.paths = pathss
        req.body.datas.names = namess
        console.log(req.body.datas)
        const mainData = await Main.updateOne({ _id: req.params.id }, req.body.datas)
        res.status(200).send({
            mainData
        })

    },

    delete: async (req, res) => {
        const aptdata = await Land.deleteOne({ landId: req.params.id })
        const main = await Main.findOne({ _id: req.params.id })

        const paths = main.paths
        paths.forEach(path => {
            fs.rm(path, { recursive: true }, (err) => {
                if (err) {

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