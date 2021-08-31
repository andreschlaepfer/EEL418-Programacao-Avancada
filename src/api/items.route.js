import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller.js";
//import Item from '../models/item.model.js'
const router = express.Router();

router.get("/:restaurantId", getItems);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
