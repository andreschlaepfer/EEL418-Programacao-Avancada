import mongoose from "mongoose";

const Schema = mongoose.Schema;

const managerSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      minlength: 6,

    },
    cellnumber: {
      type: String,
      require: false,
      unique: true,
    },
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    
  },
  {
    timestamps: true,
  }
);

const Manager = mongoose.model("Manager", managerSchema);

export default Manager;