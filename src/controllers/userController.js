const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const salt = 10
module.exports = {
    create: async(req,res) => {
        const {username,password} = req.body
        const hashedPass = await bcrypt.hash(password,salt)
        const data = await User.create({username: username,password: hashedPass})
        
        res.status(200).send({
            data
        })
     
    }
}