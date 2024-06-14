
const Land = require('../models/landModel');
const Main = require('../models/mainModel')
/*
{
Land:{
  datas: "asdasdasd"
},
main:{
  datas: "asdasdad" 
}
}

*/
module.exports = {
    create: async (req, res) => {
        req.body.main.tip = "land"
        const mainData = await Main.create(req.body.main)
        req.body.land.landId = mainData._id
        const LandData = await Land.create(req.body.land)

        res.status(201).send({
            mainData,
            LandData,
            message: "property saved"
        })
    },
    read: async (req, res) => {

        const data = await Land.findOne({id: req.params.identity}).populate("landId")

        res.status(200).send({
            data
        })
    },
    update: async (req, res) => {

        const LandData = await Land.updateOne({ id: req.params.identity }, req.body.land)
        const mainData = await Main.updateOne({ id: req.params.identity }, req.body.main)
        res.status(200).send({
            error: false,
            LandData,
            mainData,
            message: "property updated successfully"
        })
    },


    delete: async (req, res) => {
        const aptdata = await Land.deleteOne({ id: req.params.identity })
        const maindata = await Main.deleteOne({ id: req.params.identity })

        res.status(204).send({
            message: "Property deleted"
        })
    }
}