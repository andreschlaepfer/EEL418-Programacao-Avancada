import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  cellnumber:{
    type: Number,
    require: true,
    unique:  true
  }



}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User


