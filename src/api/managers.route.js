import express from "express";
import {
  getManagers,
  createManager,
  updateManager,
  deleteManagers,
  signIn,
} from "../controllers/manager.controller.js";
//import Manager from '../models/Manager.model.js'
const router = express.Router();

router.get("/", getManagers);
router.post("/", createManager);
router.put("/:id", updateManager);
router.delete("/:id", deleteManagers);

router.post("/signIn", signIn);

export default router;
