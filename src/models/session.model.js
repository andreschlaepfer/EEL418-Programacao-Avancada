import mongoose from 'mongoose'


const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  table: { 
    type: Schema.Types.ObjectId, 
    ref: 'Table'
  },
  orders: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Order'
    }],
  active: { 
    // aberta
    // fechada
    type: Boolean,
    require: true,
    default: true
  }

}, {
  timestamps: true,
});

const Session = mongoose.model('Session', sessionSchema);

export default Session

