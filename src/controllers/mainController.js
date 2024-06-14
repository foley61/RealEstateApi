
const Main = require("../models/mainModel")

module.exports = {
    list: async(req,res) => {
        const data = await Main.find()

        res.status(200).send({
            error: false,
            data
        })
    }
}