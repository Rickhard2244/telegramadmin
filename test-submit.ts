import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { CodeRequest } from "./models/CodeRequest";

dotenv.config();

const testSubmit = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✓ MongoDB connected");

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    
    console.log("Creating code request...");
    const result = await CodeRequest.create({
      code: "1234",
      userId: "user1",
      flowType: "new_user",
      expiresAt,
    });

    console.log("✓ Success! Created:", result);
    process.exit(0);
  } catch (error) {
    console.error("✗ Error:", error);
    process.exit(1);
  }
};

testSubmit();
