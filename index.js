const express = require("express");
const app = express();

//loaf config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


//import routes for todo api
const todoRoutes = require('./routes/todo');

//mount the todo api routes
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})

//connect to the db
const dbConnect = require("./config/database")
dbConnect();

//Default route
app.get("./", (req,res)=>{
    res.send(`<h1>this is homepage</h1>`)
})