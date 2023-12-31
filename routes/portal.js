const express = require("express");
const router = express.Router();
const multer = require("multer");
const withAuth = require("../Middleware/withAuth");

// let Storage = multer.diskStorage({
//   destination: "./images",

//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

let Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = "./images";
    console.log(req, "request"); // Your destination path
    console.log(file, "files");
    console.log("Destination Path:", destinationPath);
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: Storage,
});
const {admin}= require("../controllers/admin")
const { createCards } = require("../controllers/createCards");
const { updateCards } = require("../controllers/updateCards");
const { getCards, getCardsId } = require("../controllers/getCards");

const { deleteCards } = require("../controllers/deletecards");

const { createLogin } = require("../controllers/createLogin");
const { uploadImages } = require("../controllers/uploadImages");
const { deleteCookies } = require("../controllers/deleteCookies");


router.put("/admin",admin);// for sign up 
router.post("/createCards", withAuth, createCards);
router.put("/updateCards/:id", withAuth, updateCards);
router.get("/getCards", getCards); // getting all the data

router.get("/getCardsID/:id", getCardsId); //getting bases of the id
router.delete("/deleteCards/:id", deleteCards);
router.post("/createLogin", createLogin);
router.get("/deleteCookies", deleteCookies);
router.post("/uploadImages", upload.single("user"), uploadImages); //uploadimages

// router.post("/upload", upload.single("user"), async (req, res) => {
//   if (req.file === undefined) return res.send("you must select a file.");
//   const imgUrl = `http://localhost:5080/upload/${req.file.filename}`;
//   return res.send(imgUrl);
// });

module.exports = router;
