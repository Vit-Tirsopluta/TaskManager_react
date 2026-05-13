import express from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

export default router;
