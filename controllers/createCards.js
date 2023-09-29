const Cards = require("../models/cards");

exports.createCards = async (req, res) => {
  // console.log(createCards)

  try {
    console.log(req, "req.body ");
    const { Role, name, About } = req.body;

    // const imageName = Image
    // console.log(Image , "frontend image ")

    // console.log(req.body);
    const response = await Cards.create({ Role, name, About });

    res.status(200).json({
      success: true,
      data: "response",
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err),
      console.log(err),
      res.status(500).json({
        success: false,
        data: "internal server error ",
        message: err.message,
      });
  }
};
