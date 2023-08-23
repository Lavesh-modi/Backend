const Cards = require("../models/cards")



exports.updateCards = async(req,res)=>{


    // console.log(createCards)
try{
    

    const {id} = req.params;
    console.log(req.params)
    const{Role,name,About} = req.body;
    
    console.log("shggfhdvfs",req.body)


    



    const update = await Cards.findByIdAndUpdate(
        {_id:id},
        {Role,name,About,updatedAt:Date.now()}
    )

    res.status(200).json(
        {
            success:true,
            data:update,
            message:'Updated Created Successfully'
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