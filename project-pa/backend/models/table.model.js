import mongoose from 'mongoose'
import Restaurant from './restaurant.model.js'
import User from './user.model.js'

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  name: {
    type: Number,
    require: true,
  },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant'},
  costumers: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);

export default Table