const express = require("express")
const router = express.Router();


const{createCards} = require("../controllers/createCards");
const {updateCards} = require("../controllers/updateCards");
const {getCards, getCardsId}= require("../controllers/getCards");

const{deleteCards}= require("../controllers/deletecards");

const {createLogin}= require("../controllers/createLogin");
const {deleteCookies}= require("../controllers/deleteCookies");


router.post("/createCards",createCards);
router.put("/updateCards/:id",updateCards);
router.get("/getCards", getCards);// getting all the data

router.get("/getCardsID/:id", getCardsId);//getting bases of the id 
router.delete("/deleteCards/:id",deleteCards);
router.post("/createLogin",createLogin);
router.get("/deleteCookies",deleteCookies);







module.exports = router;