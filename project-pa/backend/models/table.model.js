import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  name: {
    type: Number,
    require: true,

  }
}, {
  timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);

export default Table