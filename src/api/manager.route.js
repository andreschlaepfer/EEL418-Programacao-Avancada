import express from "express";
import {
  getManagers,
  createManager,
  updateManager,
  deleteManagers,
} from "../controllers/Manager.controller.js";
//import Manager from '../models/Manager.model.js'
const router = express.Router();

router.get("/", getManagers);
router.post("/", createManager);
router.put("/:id", updateManager);
router.delete("/:id", deleteManagers);

export default router;