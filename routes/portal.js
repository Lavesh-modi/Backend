const express = require("express");
const router = express.Router();
const multer = require("multer");

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

const { createCards } = require("../controllers/createCards");
const { updateCards } = require("../controllers/updateCards");
const { getCards, getCardsId } = require("../controllers/getCards");

const { deleteCards } = require("../controllers/deletecards");

const { createLogin } = require("../controllers/createLogin");
const { uploadImages } = require("../controllers/uploadImages");
const { deleteCookies } = require("../controllers/deleteCookies");

router.post("/createCards", createCards);
router.put("/updateCards/:id", updateCards);
router.get("/getCards", getCards); // getting all the data

router.get("/getCardsID/:id", getCardsId); //getting bases of the id
router.delete("/deleteCards/:id", deleteCards);
router.post("/createLogin", createLogin);
router.get("/deleteCookies", deleteCookies);
router.post("/uploadImages", upload.single("user"), uploadImages); //uploadimages

module.exports = router;
