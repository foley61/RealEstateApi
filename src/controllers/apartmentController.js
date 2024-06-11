
const Apartment = require('../models/apartmentModel');

module.exports = {
    create: async(req,res) => {
    const data = await Apartment.create(req.body)

    res.status(201).send({
        data,
        message: "property saved"
    })
    },
    read: async(req,res) => {
     
        const data = await Apartment.findOne({id: req.params.id}).populate("apartmentId")

        res.status(200).send({
            data
        })
    },
    update: async(req,res) => {
        const data = await Apartment.updateOne({id: req.params.id})

        res.status(200).send({
            oldData: data,
            newData: await Apartment.findOne({id: req.params.id}),
            message: "property updated successfully"
        })
    },
    delete: async(req,res) => {
        const data = await Apartment.deleteOne({id: req.params.id})

        res.status(204).send({
            message: "Property deleted"
        })
    }
}