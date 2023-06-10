// import the model 
const Todo = require("../models/todo")

exports.deleteTodo = async(req,res) =>{

    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"todo deleted"
        })
    }
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'internal server error',
        });

    }

}
