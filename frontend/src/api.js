const API_BASE = "http://localhost:8000"; // Change if backend runs elsewhere

export async function fetchTasks() {
  try {
    const res = await fetch(`${API_BASE}/tasks`);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function createTask(task) {
  try {
    const res = await fetch(`${API_BASE}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Failed to create task");
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}

export async function updateTask(taskId, updatedFields) {
  try {
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}

export async function deleteTask(taskId) {
  try {
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete task");
  } catch (e) {
    console.error(e);
  }
}
