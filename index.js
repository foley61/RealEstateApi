const express = require("express")
const rateLimiter = require("express-rate-limit")
const helmet = require("helmet")
const cors = require('cors');
const { dbConnection } = require("./src/configs/dbConnection")




const app = express()
const limiter = rateLimiter({
    windowMs: 30 * 1000,
    max: 25,
})
app.use(helmet())
app.use(limiter)

//! app.use(cors({ origin: 'https://example.com' })); programı canlıya almadan önce url'i ekle böylece başka yerden api'ye erişim  sağlanamaz


require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded())
dbConnection()
app.use(require("./src/middlewares/authMiddleware"))
app.use(require('./src/middlewares/queryHandler'))
app.use('/', require('./src/routes/'))



app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to ESTATE API',
        user: req.user,
    })
})
app.use(require('./src/middlewares/errorHandler'))
app.listen(process.env.PORT, () => {
    console.log("server is running on this port", process.env.PORT)
}) 