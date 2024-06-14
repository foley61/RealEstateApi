
const Apartment = require('../models/apartmentModel');
const Main = require('../models/mainModel')
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
        req.body.main.tip = "apartment"

        const mainData = await Main.create(req.body.main)
        req.body.apartment.apartmentId = mainData._id
        const apartmentData = await Apartment.create(req.body.apartment)

        res.status(201).send({
            mainData,
            apartmentData,
            message: "property saved"
        })
    },
    read: async (req, res) => {

        const data = await Apartment.findOne({id: req.params.identity}).populate("apartmentId")

        res.status(200).send({
            data
        })
    },
    update: async (req, res) => {

        const apartmentData = await Apartment.updateOne({ id: req.params.identity }, req.body.apartment)
        const mainData = await Main.updateOne({ id: req.params.identity }, req.body.main)
        res.status(200).send({
            error: false,
            apartmentData,
            mainData,
            message: "property updated successfully"
        })
    },


    delete: async (req, res) => {
        const aptdata = await Apartment.deleteOne({ id: req.params.identity })
        const maindata = await Main.deleteOne({ id: req.params.identity })

        res.status(204).send({
            message: "Property deleted"
        })
    }
}