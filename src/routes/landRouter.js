
const Land = require("../controllers/landController")
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });


const router = require('express').Router()
const {isLogin} = require("../middlewares/permissions")

router.post('/add',isLogin, Land.create),
router.get("/:id", Land.read),
router.put("/update/:id",isLogin, Land.update),
router.delete('/delete/:id',isLogin, Land.delete)

module.exports = router