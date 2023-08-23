const cards = require("../models/cards");

exports.getCards = async (req, res) => {
  try {
    //fetch data in teh todo
    const todos = await cards.find({});
    // console.log(todos);
    console.log("reach");

    res.status(200).send({
      success: true,
      data: todos,
      message: "Entire Todo data is Feteched ",
    });

    console.log("reach 2");
  } catch (err) {
    console.log("reach err");
    console.error(err),
      console.log(err),
      res.status(500).json({
        success: false,
        data: "internal server error ",
        message: err.message,
      });
  }
};

exports.getCardsId = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await cards.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data Found with Given id ",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `YES ${id} RECIEVE THE DATA OF THE ID `,
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
