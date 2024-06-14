const express = require("express")
const {dbConnection} = require("./src/configs/dbConnection")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded())
dbConnection()
app.use('/', require('./src/routes/'))
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to ESTATE API',
    
    })
})
// app.use(require('./src/middlewares/queryHandler'))
app.listen(process.env.PORT,() => {
    console.log("server is running on this port",process.env.PORT)
}) 