const mongoose = require("mongoose")

const apartmentSchema = new mongoose.Schema({
    m2brut: {
        type: Number,
        required: true
    },
    m2net: {
        type: Number,
        required: true
    },
    binaYasi: {
        type: Number,
        required: true
    },
    odaSayi: {
        type: String,
        required: true
    },
    bulKat: {
        type: Number,
        required: true
    }, 
    katSayi: {
        type: Number,
        required: true
    },
    isitma:{
        type: String,
        enum: ['dogalgaz','soba'],
        required: true
    },
    banyoSayi: {
        type: Number,
        required: true
    },
    balkon: {
        type: Boolean,
        required: true
    },
    tuvaletSayi: {
        type: Number,
        required: true
    },
    esyali: {
        type: Boolean,
        required: true
    },
    siteIci: {
        type: Boolean,
        required: true
    },
    goruntuAra: {
        type: Boolean,
        required: true
    },
    yapiDurum: {
        type: String,
        required: true
    },
    tapuDurum: {
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
    ilanOzlk: {
        cephe: Array,
        icOzellik: Array
    },
    aciklama: {
        type: String,
        required: true
    }
}, {
    collection: "apartments",
    timestamps: true
})
module.exports = mongoose.model("Apartment",apartmentSchema)