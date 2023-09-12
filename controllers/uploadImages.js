const multer = require ("multer")





let Storage = multer.diskStorage({
    destination:'./images',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})
let upload = multer({
    storage:Storage
})



exports.uploadImages = async (req, res)=> {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const filename = req.file.originalname;
    console.log(filename,"filll");

      return res.status(200).json({ message: `File ${filename} uploaded successfully`
   }
   
  
   );
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  