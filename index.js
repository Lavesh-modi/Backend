const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require ("multer")

require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());

app.use(express.json());
app.use(cors());

const jobRoutes = require("./routes/portal");

app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

const userConnect = require("./config/user");
userConnect();

app.get("/", (req, res) => {
  res.send("<h1>This is THE HOmepage</h1>");
});

app.use("/api/v1/", jobRoutes);
