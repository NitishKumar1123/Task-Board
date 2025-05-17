import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/tasks";

const statusColumns = ["todo", "in-progress", "done"];

const statusLabels = {
  "todo": "To Do",
  "in-progress": "In Progress",
  "done": "Done",
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTaskTitle.trim()) return;
    const res = await axios.post(API_URL, {
      title: newTaskTitle,
      status: "todo"
    });
    setNewTaskTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  const updateTaskStatus = async (id, newStatus) => {
    await axios.put(`${API_URL}/${id}`, {
      status: newStatus
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Task Board</h1>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-64"
          placeholder="New task title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {statusColumns.map((status) => (
          <div key={status} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {statusLabels[status]}
            </h2>
            {tasks.filter(task => task.status === status).map(task => (
              <div key={task.id} className="bg-gray-50 p-3 rounded mb-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800">{task.title}</span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ❌
                  </button>
                </div>
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                  className="text-sm border border-gray-300 rounded p-1 w-full"
                >
                  {statusColumns.map(s => (
                    <option key={s} value={s}>{statusLabels[s]}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
