const mongoose = require("mongoose");

require("dotenv").config();

const   userConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, // online issue solved it ;
    })
    .then(() => {
      console.log("userdb Connection Suceesful ");
    })
    .catch((error) => {
      console.log("Issue in the userdb Connection");
      console.error(error.message);
      process.exit(1);
    });
};
module.exports = userConnect;
