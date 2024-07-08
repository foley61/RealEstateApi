
const Land = require("../controllers/landController")
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + file.originalname)
  }
})
const upload = multer({ storage: storage })
const router = require('express').Router()
const { isLogin } = require("../middlewares/permissions")


router.post('/add', isLogin, upload.array('images', 12), Land.create),
  router.get("/:id", Land.read),
  router.put("/update/:id", upload.array('images', 12),  Land.update),
  router.put("/imgupdate/:id", isLogin, upload.array('images', 12), Land.imageUpdate),
  router.delete('/delete/:id', isLogin, Land.delete)

module.exports = router