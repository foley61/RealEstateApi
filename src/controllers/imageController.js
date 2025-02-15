

const Image = require("../models/imagesModel")
const Main = require("../models/mainModel")

module.exports = {
    create: async(req,res) => {
        const uploadedFiles = req.files;
        const savedImages = [];
        const pathss = []
        const namess = []
        for (const file of uploadedFiles) {
          const imagePath = file.path;
          const imageName = file.originalname;
          const imageType = file.mimetype;
       

          pathss.push(imagePath)
          namess.push(imageName)
        }
          try {
            const newImage = new Image({
              paths: {
                path: pathss
              },
              names: {
                name: namess
              },
              propertyId: req.body.propertyId
            });
            await newImage.save();
         
            savedImages.push(newImage);
          } catch (error) {
            console.error('Error saving image to MongoDB:', error);
            res.status(500).json({ message: 'Dosya yükleme işlemi sırasında hata oluştu.' });
            return; // Hatalı işlemi sonlandırın
          }
        
      
        if (savedImages.length > 0) {
          res.json({ message: 'Dosyalar başarıyla yüklendi ve MongoDB\'ye kaydedildi!', images: savedImages });
        } else {
          res.status(400).json({ message: 'Resim yükleme işlemi sırasında hata oluştu.' });
        }
    },
    read: async(req,res) => {
      const data = await res.getModelList(Image, {},"propertyId")
      
      res.status(200).send({
        data,
      })
    
   
    },
  
}