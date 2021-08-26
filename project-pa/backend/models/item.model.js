import mongoose from 'mongoose'
import Restaurant from './restaurant.model.js'
import User from './user.model.js'

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
  },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant'},
  costumers: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

export default Item