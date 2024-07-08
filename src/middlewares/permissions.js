module.exports = {
    isLogin: async(req,res,next) => {
       
        if(req.user){
            next()
        }else{
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    }
}