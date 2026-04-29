import mongoose from "mongoose";

const codeRequestSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    userId: { type: String, required: true },
    flowType: {
      type: String,
      enum: ["new_user", "forgot_password"],
      default: "new_user",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "declined"],
      default: "pending",
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    approvedBy: String,
    approvedAt: Date,
    declinedBy: String,
    declinedAt: Date,
    clientIp: String,
    userAgent: String,
    method: String,
    otpStep: Number,
  },
  { timestamps: true },
);

export const CodeRequest = mongoose.model("CodeRequest", codeRequestSchema);
