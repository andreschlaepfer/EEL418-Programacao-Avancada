import mongoose from "mongoose";
//import Table from './table.model.js'
//import Item from './item.model.js'

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    cellnumber: {
      type: String,
      require: true,
      unique: true,
    },
    session: [{ type: Schema.Types.ObjectId, ref: "Session" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
