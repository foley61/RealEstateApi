const multer = require('multer');
const Images = require("../controllers/imageController")
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
const Image = require('../models/imagesModel');
const router = require('express').Router();
const { isLogin } = require("../middlewares/permissions");

router.post('/upload', upload.array('images', 12), Images.create);
router.get('/upload', Images.read);


module.exports = router;
