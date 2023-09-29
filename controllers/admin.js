const bcrypt = require("bcrypt");

const authent = require("../models/authentication");

const saltRounds = 10;

exports.admin = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new admin user
    const response = await authent.create({
      name,
      password: hashedPassword,
      email,
    });

    return res.status(200).json({
      success: true,
      data: response,
      message: "Admin created successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred." });
  }
};
