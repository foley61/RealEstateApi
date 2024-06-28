const {mongoose} = require("../configs/dbConnection")


const imageSchema = new mongoose.Schema({

    paths: {
        path: Array
    },
    names: {
        name: Array
    },
   
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Main',
        required: true,
        unique: true,
    },
},{
    collection: "Images",
    timeStamps: true
})

module.exports = mongoose.model("Image",imageSchema)