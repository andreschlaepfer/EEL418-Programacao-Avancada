const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description:{
    type: String,
    require: false,
    unique: false,
    trim: true
  },
  price: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;