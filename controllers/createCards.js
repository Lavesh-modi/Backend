const Cards = require("../models/cards")


exports.createCards = async(req,res)=>{


    // console.log(createCards)
try{
    const{Role,name,About} = req.body;

    


    console.log(req.body)
    const response = await Cards.create({Role,name,About})

    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry Created Successfully'
        }
    );
}
catch(err){


console.error(err),
console.log(err),
res.status(500)
.json({
    success:false,
    data:"internal server error ",
    message:err.message,
})
}






}


