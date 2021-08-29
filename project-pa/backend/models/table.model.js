import mongoose from 'mongoose'
//import Restaurant from './restaurant.model.js'
//import User from './user.model.js'

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  number: {
    type: Number,
    require: true,
  },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant'},
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session'}]
}, {
  timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);

export default Table