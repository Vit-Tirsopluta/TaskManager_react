import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { id: "asc" },
    });

    res.status(200).json({
      status: "success",
      data: { tasks },
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await prisma.task.create({
      data: { title: req.body.title },
    });

    res.status(201).json({
      status: "success",
      data: { task: newTask },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.task.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Помилка видалення",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const updateTask = await prisma.task.update({
      where: { id },
      data: {
        completed: req.body.completed,
      },
    });
    res.status(200).json({
      status: "success",
      data: { task: updateTask },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
