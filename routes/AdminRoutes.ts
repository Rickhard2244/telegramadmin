import express from "express";
import { adminAction } from "../controllers/AdminController";

const router = express.Router();

router.post("/action", adminAction);

export default router;
