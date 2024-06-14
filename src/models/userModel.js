const {mongoose} = require("../configs/dbConnection")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    collection: "Users",
    timestamps: true
})
module.exports = mongoose.model("User",userSchema)