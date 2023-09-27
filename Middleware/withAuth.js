const jwt = require("jsonwebtoken");
const secert = process.env.SECEERET_KEY;

const withAuth = function (req, res, next) {
  const authorizationHeader = req.headers.authorization;
  console.log(req.headers.authorization, "req.headers.authorization"); // Assuming req.headers.authorization contains the header value
  console.log(authorizationHeader, "authorizationHeader");
  const tokeen = authorizationHeader.split(" ")[1]; // Split the header value by space and take the second part
  console.log(tokeen, "token for useAuthh");
  const token = tokeen.split("=")[1];
  console.log(token, "tokken");

  console.log("middle ware ");

  console.log(token, "tokken for backend");
  console.log(secert, "secret key console");
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secert, function (err, decoded) {
      if (err) {
        // console.error(err, "error in the");
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};
module.exports = withAuth;
