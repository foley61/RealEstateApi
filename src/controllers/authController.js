const Token = require("../models/tokenModel")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
module.exports = {
   login: async(req,res) => {
    const {username,password} = req.body

    const userData = await User.findOne({username})
    
    if(!userData){
      return res.send("userData")
    }

    const isValidPass = await bcrypt.compare(password,userData.password)
    const secret = crypto.randomBytes(32).toString('hex');
    if(!isValidPass){
        return res.send("invalid credentials")
    }
    var TokenData = await Token.findOne({ userId: userData.id })
    if(!TokenData){
        var TokenData = await Token.create({
            userId: userData.id,
            token: userData.id + secret
        })
      
    }
  
    res.status(200).send({
        token: TokenData.token,
        message: "logined"
    })
   },
   logout: async(req,res) => {
    const auth = req.headers?.authorization
    const TokenKey = auth ? auth.split(" ") : false

    if(TokenKey[0] == "Token"){
    const data = await Token.deleteOne({token: TokenKey[1]})
    res.send({
        error: false,
        message: 'Token deleted. Logout was OK.',
    })   
}
   }
}