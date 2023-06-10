// import model 
const Todo = require("../models/todo");

//route handle 

exports.getTodo = async(req,res)=>{
    try{
        // fetch all todo items from data base
        const todos= await Todo.find({});

        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data fetched",
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
    };
};

exports.getTodoByid = async(req,res) =>{
    try{
        // extract todo items base on ids 
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id})

        // data for given id not found 
        if (!todo){
            return res.status(404).json({
             success:false,
             message: "No data found with given Id"   
            })
        }
        // data for given id found 
        res.status(200).json({
            success: true,
            data : todo,
            message: `Todo ${id} data succesfully fetched` 
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

    };
}