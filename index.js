const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const Grid = require("gridfs-stream");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());

app.use(express.json());
app.use(cors());

const jobRoutes = require("./routes/portal");

app.use(express.static("images"));

// added a new
// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

// till here

app.get("/image", (req, res) => {
  console.log("running image");
  // Assuming the image file name is 'image.jpg' in the 'public' folder
  const imagePath = __dirname + "/images/money-heist.jpg";
  res.sendFile(imagePath);
});

app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

const userConnect = require("./config/user");
userConnect();

app.get("/", (req, res) => {
  res.send("<h1>This is THE HOmepage</h1>");
});

app.use("/api/v1/", jobRoutes);
