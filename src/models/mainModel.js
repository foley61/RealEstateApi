const {mongoose} = require("../configs/dbConnection")


const mainSchema = new mongoose.Schema({
    tip: {
        type: String,
        required: true
    },
    baslik: {
        type: String,
        required: true
    },
    fiyat: {
        type: Number,
        required: true
    },
    oda: {
        type: String,
    },
    m2: {
        type: Number,
        required: true
    },
    katSayi: {
        type: Number,
    }
},{
    collection: "Main",
    timestamps: true
})

module.exports = mongoose.model("Main",mainSchema)