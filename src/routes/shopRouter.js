
const shop = require("../controllers/shopController")
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

router.post('/add', isLogin, upload.array('images', 12), shop.create),
  router.get("/:id", shop.read),
  router.put("/update/:id", upload.array('images', 12),  shop.update),
  router.put("/imgupdate/:id", isLogin, upload.array('images', 12), shop.imageUpdate),
  router.delete('/delete/:id', isLogin, shop.delete)

module.exports = router