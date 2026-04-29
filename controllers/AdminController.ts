import { Request, Response } from "express";
import { CodeRequest } from "../models/CodeRequest";
import { isAdmin, logAdminAction } from "../utils/admin";

export const adminAction = async (req: Request, res: Response) => {
  try {
    const { adminId, codeId, action } = req.body;

    if (!isAdmin(adminId)) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const status = action === "approve" ? "approved" : "declined";

    const code = await CodeRequest.findByIdAndUpdate(
      codeId,
      { status },
      { new: true },
    );

    if (!code) {
      return res.status(404).json({ error: "Code not found" });
    }

    logAdminAction({
      userId: adminId,
      action,
      code: code.code,
      timestamp: new Date().toISOString(),
      flowType: code.flowType,
    });

    res.json({ success: true, code });
  } catch {
    res.status(500).json({ error: "Admin action failed" });
  }
};
