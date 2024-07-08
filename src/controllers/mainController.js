
const Main = require("../models/mainModel")
const Images = require("../models/imagesModel")

module.exports = {
    list: async(req,res) => {
        const data = await res.getModelList(Main, {})     

        res.status(200).send({
            error: false,
            data
        
        })
    }
}