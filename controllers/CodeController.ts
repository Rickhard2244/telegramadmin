import { Request, Response } from "express";
import { CodeRequest } from "../models/CodeRequest";

export const submitCode = async (req: Request, res: Response) => {
  try {
    const { code, userId, flowType } = req.body;

    // Validate required fields
    if (!code || !userId) {
      return res.status(400).json({ error: "Code and userId are required" });
    }

    // Set expiration to 10 minutes from now
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const newCode = await CodeRequest.create({
      code,
      userId,
      flowType: flowType || "new_user",
      expiresAt,
    });

    res.status(201).json({ success: true, id: newCode._id });
  } catch (err: any) {
    console.error("Submit code error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getCodeStatus = async (req: Request, res: Response) => {
  try {
    const code = await CodeRequest.findById(req.params.id);

    if (!code) return res.status(404).json({ error: "Not found" });

    res.json({ status: code.status });
  } catch {
    res.status(500).json({ error: "Error fetching status" });
  }
};
