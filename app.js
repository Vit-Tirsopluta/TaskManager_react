import cors from "cors";
import express from "express";
import morgan from "morgan";
import taskRouter from "./routes/taskRouter.js";

const app = express();

// 1. MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/tasks", taskRouter);

export default app;
