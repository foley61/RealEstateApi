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
    konum: {
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
    kullanim: {
        type: String,
 
    },
    katSayi: {
        type: Number,
    },
    tapuDurum: {
        type: String,
       
    },
    arsaDurum: {
        type: String,
       
    },
    paths: {
      
    },
    names: {
     
    },
   
 
},{
    collection: "Main",
    timestamps: true
})

module.exports = mongoose.model("Main",mainSchema)