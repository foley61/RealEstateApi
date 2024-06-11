const mongoose = require("mongoose")

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
        required: true
    },
    m2: {
        type: Number,
        required: true
    },
    katSayi: {
        type: Number,
        required: true
    }
},{
    collection: "Main",
    timestamps: true
})

module.exports = mongoose.model("Main",mainSchema)