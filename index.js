const express = require("express")

const app = express()
const dotenv = require("dotenv").config()
app.listen(process.env.PORT,() => {
    console.log("server is running on this port",process.env.PORT)
}) 