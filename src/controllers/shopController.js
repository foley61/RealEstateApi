
const shop = require('../models/shopModel');
const Main = require('../models/mainModel')
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
        req.body.main.tip = "shop"
        const mainData = await Main.create(req.body.main)
        req.body.shop.shopId = mainData._id
        const shopData = await shop.create(req.body.shop)

        res.status(201).send({
            mainData,
            shopData,
            message: "property saved"
        })
    },
    read: async (req, res) => {

        const data = await shop.findOne({ id: req.params.identity }).populate("shopId")

        res.status(200).send({
            data
        })
    },
    update: async (req, res) => {

        const shopData = await shop.updateOne({ id: req.params.identity }, req.body.shop)
        const mainData = await Main.updateOne({ id: req.params.identity }, req.body.main)
        res.status(200).send({
            error: false,
            shopData,
            mainData,
            message: "property updated successfully"
        })
    },


    delete: async (req, res) => {
        const aptdata = await shop.deleteOne({ id: req.params.identity })
        const maindata = await Main.deleteOne({ id: req.params.identity })

        res.status(204).send({
            message: "Property deleted"
        })
    }
}