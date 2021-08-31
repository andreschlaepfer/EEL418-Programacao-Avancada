import express from "express";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getOrders);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
