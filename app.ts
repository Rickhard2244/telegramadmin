import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";

import codeRoutes from "./routes/CodeRoutes";
import adminRoutes from "./routes/AdminRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/code", codeRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
