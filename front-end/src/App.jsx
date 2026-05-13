import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const API_URL = "http://localhost:8080/api/v1/tasks";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axios.get(API_URL);
        setTasks(res.data.data.tasks);
      } catch (err) {
        console.error("Помилка завантаження", err);
      }
    }
    fetchTasks();
  }, []);

  async function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post(API_URL, { title: text });
      setTasks([...tasks, res.data.data.task]);
      setText("");
    } catch (err) {
      console.error("Помилка при створенні завдання", err);
    }
  }

  async function toggleTask(task) {
    try {
      await axios.patch(`${API_URL}/${task.id}`, {
        completed: !task.completed,
      });
      setTasks(
        tasks.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t,
        ),
      );
    } catch (err) {
      console.error("Помилка оновлення статусу", err);
    }
  }

  async function deleteTask(idToRemove) {
    try {
      await axios.delete(`${API_URL}/${idToRemove}`);
      setTasks(tasks.filter((task) => task.id !== idToRemove));
    } catch (err) {
      console.error("Помилка видалення", err);
    }
  }

  return (
    <div className="app-container">
      <h1>Менеджер завдань</h1>
      <form className="add-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Створіть нове завдання"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Додати
        </button>
      </form>
      <div className="task-list">
        {tasks.map((task) => (
          <div
            className={`task ${task.completed ? "done" : "pending"}`}
            key={task.id}
          >
            <p
              onClick={() => toggleTask(task)}
              style={{ cursor: "pointer", flexGrow: 1 }}
            >
              {task.title}
            </p>
            <button
              className="delete"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
