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

// const login = require("../models/login");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

// exports.createLogin = async (req, res) => {
//   try {
//     // Generate a salt and hash the password
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     const { email } = req.body;

//     // Find the user based on the email
//     const user = await login.findOne({ email });

//     console.log(hashedPassword);

//     if (user) {
//       // User exists, create a JWT token
//       const token = jwt.sign(
//         { userId: user._id, email: user.email ,},
//         "mac_123@lavesh",
//         {
//           expiresIn: "1h",
//         }
//       );

//       // Set the JWT token as a cookie
//       res.cookie("jwwwwwt", token, {
//         httpOnly: true, // Cookie cannot be accessed via JavaScript
//         maxAge: 3600000,
//       });

//       res.json({ exists: true, token });
//     } else {
//       res.json({ exists: false });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred." });
//   }
// };

// const login = require("../models/login");
// const jwt = require("jsonwebtoken");
// // const LOGIN = require("../models/login")
// exports.createLogin = async (req, res) => {
//   const { email } = req.body;
//   const {password} = req.body;
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
//     console.log("hello findone0",user)

//     if (user) {
//       // User exists, create a JWT token
//      /* const token = jwt.sign({ userId: user._id }, "mac_123@lavesh", {
//         expiresIn: "1h",
//       });*/
//       const userInputPassword = password;
//       const checking = userInputPassword === user.password;
//       console.log(checking,"checking password")

//       if (checking) {

//       const token = jwt.sign(
//         { userId: user._id, email: user.email ,password:user.password},
//         "mac_123@lavesh",
//         {
//           expiresIn: "1h",
//         }
//       );
//       console.log("aPI CALLED");
//       res.cookie(`Cookie token name`, `encrypted cookie string Value`);
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

const login = require("../models/authentication");
const bcrypt = require("bcrypt");

//jwt has been imported in it
const jwt = require("jsonwebtoken");

exports.createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const authorizationHeader = req.headers.authorization; // Assuming req.headers.authorization contains the header value

    if (authorizationHeader) {
      const token = authorizationHeader.split(" ")[1]; // Split the header value by space and take the second part
      console.log(token, "token");
    } else {
      // Handle the case where there is no authorization header
      console.log("Authorization header is missing");
    }

    // Check if the user with the given email exists in the database
    const user = await login.findOne({ email });

    if (!user) {
      // User does not exist
      return res.json({ exists: false });
    }
    console.log(password, "password");
    console.log(user.password, "user password");

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res
        .status(500)
        .json({ error: "An error occurred during authentication." });
    } else {
      // // User exists and password is valid, create a JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.SECEERET_KEY,
        {
          expiresIn: process.env.EXPIRE_TIME,
        }
      );
      console.log("api called");
      res.cookie(`Cookie token name`, `encrypted cookie string Value`);
      //       // res.cookie(`Cookie token name`, `encrypted cookie string Value`);
      console.log("tokkkken", token);

      // Set the JWT token as a cookie
      res.cookie("jwwwwwt", token, {
        httpOnly: true, // Cookie cannot be accessed via JavaScript
        maxAge: 3600000, // 1 hour
      });

      res.json({ exists: true, token, message: "Authentication successful." });

      // return result.status(200).json({ message: "Authentication successful." });
    }
  } catch (error) {
    //  bcrypt.compare(password, user.password, function (err, result) {
    //   if (err) {
    //     console.log("password checking")
    //     // Handle error
    //     console.error(err);
    //     // return res
    //     //   .status(500)
    //     //   .json({ error: "An error occurred during authentication." });
    //   }

    //   if (result) {
    //     // Password is valid
    //     // return res.status(200).json({ message: "Authentication successful." });
    //   } else {
    //     // Password is invalid
    //     return res
    //       .status(401)
    //       .json({ error: "Authentication failed. Invalid password." });
    //   }
    // });

    // if (!isPasswordValid) {
    //   // Password is incorrect

    //   return res.json({ exists: false });
    // }

    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
};
