const Cards = require("../models/cards")


exports.deleteCards = async(req,res)=>{

    try{
    const {id} = req.params;
    


    await Cards.findByIdAndDelete(id);


    res.json({
        success:true,
        // data:todo,
        message:`deleted Sucessfully `,

     })


        
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
