
const router = require("express").Router()

const Main = require("../controllers/mainController")
router.get("/", Main.list)

module.exports = router