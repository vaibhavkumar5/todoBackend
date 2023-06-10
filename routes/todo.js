const express = require('express');
const router = express.Router();


//import controller 
const {createTodo} = require('../controllers/createTodo');
const {getTodo, getTodoByid} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

// Define API routes

router.post("/createTodo", createTodo);

router.get('/getTodos', getTodo);

router.get('/getTodos/:id', getTodoByid)

router.put('/updateTodo/:id', updateTodo);

router.delete('/deleteTodo/:id', deleteTodo);



module.exports = router ;