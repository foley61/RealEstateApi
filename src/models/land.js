const mongoose = require("mongoose")

const landSchema = new mongoose.model({
    landId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Main',
        required: true,
        unique: true,
    },
    arsaTip: {
        type: String,
        required: true
    },
    m2: {
        type: Number,
        required: true
    },
    tapuDurum: {
        type: String,
        required: true
    },
    arsaDurum: {
        type: String,
        required: true
    },
    parselNo: {
        type: Number,
        required: true
    },
    adaNo: {
        type: Number,
        required: true
    },
    aciklama: {
        type: String,
        required: true
    },
    ilanOzelk: {
        altyapi: Array,
        arsaKonum: Array
    }
},{
    collection: "Lands",
    timeStamps: true
})

module.exports = mongoose.model("Land",landSchema)