import express from "express";
import { submitCode, getCodeStatus } from "../controllers/CodeController";

const router = express.Router();

router.post("/submit", submitCode);
router.get("/status/:id", getCodeStatus);

export default router;
