import mongoose from "mongoose";
//import Item from './item.model.js'
//import Table from './table.model.js'

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
  state: String,
});

//const Address = mongoose.model('Address', addressSchema)

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    address: addressSchema,
    menuItems: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    tables: [{ type: Schema.Types.ObjectId, ref: "Table" }],
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
