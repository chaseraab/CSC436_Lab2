const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true,},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: {type: String, required: true},
    dateCompleted: {type: String},
    complete: {type: Boolean, required: true}
  }
);

//Export model
module.exports = mongoose.model('Todo', TodoSchema);
