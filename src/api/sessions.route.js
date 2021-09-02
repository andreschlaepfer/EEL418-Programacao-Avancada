import express from "express";
import {
  getSession,
  createSession,
  updateSession,
  deleteSession,
} from "../controllers/session.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/", createSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

router.use(authMiddleware);

router.get("/", getSession);

export default router;
