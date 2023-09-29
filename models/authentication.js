const mongoose = require("mongoose");



const authentication = new mongoose.Schema ({
    name :{
        type:String,
        required :true,
        message: "name is most important "
    },
    email :{
        type :String,
        required :true,
        unique: true,
        message: "email  is most important "
    },
    password: {
        type: String,
        required: true,
        message: "Password is must ",
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
      },


      updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
      },
});


module.exports = mongoose.model("Admin",authentication)