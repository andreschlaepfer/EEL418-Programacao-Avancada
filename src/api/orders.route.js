import express from "express";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller.js";
//import Order from '../models/order.model.js'
const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
