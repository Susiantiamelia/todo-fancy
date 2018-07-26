const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fb = require('fb')
const User = require('../models/user.js')
const Todo = require('../models/todo.js')
const key = process.env.SECRET_KEY;


class Todos{
    static allTodo(req,res){
        let token = jwt.verify(req.headers.token, key)
        Todo.find ({user: token.id})
        .then(result => {
            res.status(200).json(result)
            console.log(result)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })

    }

    static addTodo(req,res){
        console.log('ini body', req.body.date)
        console.log('ini headers', req.headers)
        let decoded = jwt.verify(req.headers.token, key)
        Todo.create({
            user: decoded.id,
            todo: req.body.todo,
            estimated_date: req.body.date
        })
        .then(todos => {
            User.find({_id: decoded.id})
            .then(user => {
                User.update({_id: user[0].id},{$push: {todo_list: todos._id}})
                .then(result => {
                    res.status(200).json('Todo is successfully added')
                })
                .catch(err => {
                    console.log('error di update')
                    res.status(500).json(err.message)
                })
            })
            .catch(err => {
                console.log('error di find')
                res.status(500).json(err.message)
            })
        })
        .catch(err => {
            console.log('error di todo')
            res.status(500).json(err.message)
        })
    }

    static updateTodo(req,res){
        Todo.updateOne({_id: req.params.id}, {
            todo: req.body.todo,
            estimated_date: req.body.estimated_date
        })
        .then(result => {
            res.status(200).json('Todo Updated')
        })
        .catch(errr => {
            res.status(500).json(err.message)
        })
    }

    static deleteTodo(req,res){
        let user = jwt.verify(req.headers.token, key)

        Todo.deleteOne({_id: req.params.id})
        .then(result => {
            User.update({_id: user.id}, {$pull: {todo_list: req.params.id}})
            .then(result => {
                res.status(200).json('Todo successfully deleted!')
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
        })
        .catch(err => {
            re.status(500).json(err.message)
        })
    }

    static changeStatus(req,res){
        Todo.updateOne({_id: req.paramsid},{
            status: 'Done'
        })
        .then(result => {
            res.status(200).json('Todo Done')
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }
}

module.exports = Todos