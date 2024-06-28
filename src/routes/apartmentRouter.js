const apartment = require("../controllers/apartmentController")
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
const {isLogin} = require("../middlewares/permissions")
router.post('/add',  upload.array('images', 12),apartment.create),
router.get("/apt/:id", apartment.read),
router.put("/update/:id", apartment.update),
router.delete('/delete/:id', apartment.delete)

module.exports = router