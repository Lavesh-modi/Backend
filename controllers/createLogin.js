// const login = require("../models/login");

// const jwt = require("jsonwebtoken");
// // const LOGIN = require("../models/login")
// const bcrypt = require('bcrypt');

// exports.createLogin = async (req, res) => {
// const = await.genSalt(10)
// secPass = bcrypt.hash(req.body.password,salt)


//   const { email } = req.body;
//   const {password} = secPass;

//   // console.log(createLogin)

//   // try {
//   //     const user = await login.findOne({ email });
//   //     if (user) {

//   //       const token = jwt.sign({ userId: user._id }, "your_secret_key", {
//   //         expiresIn: "1h",
//   //       });
//   //       res.json({ exists: true });
//   //     } else {
//   //       res.json({ exists: false });
//   //     }
//   //   } catch (error) {
//   //     res.status(500).json({ error: 'An error occurred.' });
//   //   }

//   try {
//     const user = await login.findOne({ email });

//     if (user) {
//       // User exists, create a JWT token
//       const token = jwt.sign(
//         { userId: user._id, email: user.email },
//         "mac_123@lavesh",
//         {
//           expiresIn: "1h",
//         }
//       );
//       console.log("aPI CALLED");
//       // res.cookie(`Cookie token name`, `encrypted cookie string Value`);
//       console.log("tokkkken", token);

//       // cookie
//       res.cookie("jwwwwwt", token, {
//         httpOnly: false, // Cookie cannot be accessed via JavaScript
//         maxAge: 3600000,
//       });

//       // console.log(">>>>>>>",res.cookie)

//       res.json({ exists: true, token });
//     } else {
//       res.json({ exists: false });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred." });
//   }
// };




const login = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.createLogin = async (req, res) => {
  try {
    // Generate a salt and hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { email } = req.body;

    // Find the user based on the email
    const user = await login.findOne({ email });

    console.log(hashedPassword);  

    if (user) {
      // User exists, create a JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email ,},
        "mac_123@lavesh",
        {
          expiresIn: "1h",
        }
      );

      // Set the JWT token as a cookie
      res.cookie("jwwwwwt", token, {
        httpOnly: true, // Cookie cannot be accessed via JavaScript
        maxAge: 3600000,
      });

      res.json({ exists: true, token });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};
