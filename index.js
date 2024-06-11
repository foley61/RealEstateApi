const express = require("express")

const app = express()
require("dotenv").config()
app.use(express.urlencoded())
app.use(require('./src/middlewares/queryHandler'))
app.listen(process.env.PORT,() => {
    console.log("server is running on this port",process.env.PORT)
}) 