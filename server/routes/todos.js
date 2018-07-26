const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.js')

router.get('/', function(req,res){
    res.send('here')
});

router.get('/all', todoController.allTodo)

router.post('/add', todoController.addTodo)

router.put('/update/:id', todoController.updateTodo)

router.delete('/delete/:id', todoController.deleteTodo)

router.put('/change-status/:id', todoController.changeStatus)

module.exports = router