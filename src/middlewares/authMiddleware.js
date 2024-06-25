
const TokenModel = require("../models/tokenModel")
module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization
    const TokenData = auth ? auth.split(" ") : null

    if (TokenData) {
        if (TokenData[0] == "Token") {
            const Token = await TokenModel.findOne({ token: TokenData[1] }).populate("userId")
            req.user = Token ? Token.userId : false
        }
    }
    next()
}

