import mongoose from 'mongoose'
import Restaurant from './restaurant.model.js'
import User from './user.model.js'

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  status: {
    // status1 = Preparando
    // status2 = Entregue
    type: String,
    default: 'Preparando'
  },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item'}],
  costumer: { type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

export default Order