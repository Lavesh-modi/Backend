const login = require("../models/login");

const jwt = require("jsonwebtoken");
// const LOGIN = require("../models/login")

exports.createLogin = async (req, res) => {
  const { email } = req.body;
  // console.log(createLogin)

  // try {
  //     const user = await login.findOne({ email });
  //     if (user) {

  //       const token = jwt.sign({ userId: user._id }, "your_secret_key", {
  //         expiresIn: "1h",
  //       });
  //       res.json({ exists: true });
  //     } else {
  //       res.json({ exists: false });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: 'An error occurred.' });
  //   }

  try {
    const user = await login.findOne({ email });

    if (user) {
      // User exists, create a JWT token
      const token = jwt.sign({ userId: user._id }, "mac_123@lavesh", {
        expiresIn: "1h",
      });
      console.log("aPI CALLED");
      res.cookie(`Cookie token name`, `encrypted cookie string Value`);
      console.log("tokkkken", token);

      // cookie
      res.cookie("jwwwwwt", token, {
        httpOnly: false, // Cookie cannot be accessed via JavaScript
        maxAge: 3600000,
      });

      // console.log(">>>>>>>",res.cookie)

      res.json({ exists: true, token });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};
