const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let todoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  todo: {
    type: String,
    required: [true, 'Please write something']
  },
  estimated_date: Date,
  status: {type: String, default: 'Not Yet'}
}, { timestamps: true})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo