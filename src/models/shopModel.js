const mongoose = require("mongoose")

const shopSchema = ({
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Main',
        required: true,
        unique: true,
    },
    binaYas: {
        type: Number,
        required: true
    },
    katSayi: {
        type: Number,
        required: true
    },
    m2: {
        type: Number,
        required: true
    },
    isitma: {
        type: String,
        required: true
    },
    kullanim: {
        type: String,
        required: true
    },
    yapiDurum: {
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
    ilanOzlk: {
        cephe: Array,
        ticariKullanim: Array
    }
},{
    collection: "Shops",
    timestamps: true
})

module.exports = mongoose.model("Shop",shopSchema)