const {mongoose} = require("../configs/dbConnection")


const imageSchema = new mongoose.Schema({

    paths: {
        path: Array
    },
    name: String,
    type: String,
    propertyId: String
},{
    collection: "Images",
    timeStamps: true
})

module.exports = mongoose.model("Image",imageSchema)