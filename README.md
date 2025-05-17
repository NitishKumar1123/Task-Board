````markdown
# 🧩 Task Board Application

A full-stack **Task Management Board** built with **React**, **FastAPI**, and **SQLite**. It allows users to view and update tasks across three columns: `To Do`, `In Progress`, and `Done`.

---

## 📌 Features

- 🚀 Drag-and-drop Kanban-style task board
- ✅ Task status management across 3 columns
- 🔄 Real-time backend sync with FastAPI
- 💡 Minimal, clean, and responsive UI
- 🗃️ SQLite-based persistent storage

---

## 🧱 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React + Vite       |
| Backend     | FastAPI (Python)   |
| Database    | SQLite (via SQLAlchemy) |
| HTTP Client | Axios              |

---

## 🖼️ UI Overview

| Status       | Description              |
|--------------|--------------------------|
| 📝 To Do      | Tasks yet to be started  |
| 🔄 In Progress | Tasks currently ongoing |
| ✅ Done       | Completed tasks          |

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/task-board.git
cd task-board
````

---

### 2️⃣ Backend (FastAPI)

```bash
cd backend

# Create virtual environment (optional)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
```

> Backend runs on: `http://127.0.0.1:8000`

---

### 3️⃣ Frontend (React)

```bash
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

> Frontend runs on: `http://localhost:5173`

---

## 📡 API Endpoints

### Base URL

```
http://127.0.0.1:8000
```

### Routes

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | `/tasks`      | Fetch all tasks          |
| POST   | `/tasks`      | Add a new task           |
| PUT    | `/tasks/{id}` | Update task status       |
| DELETE | `/tasks/{id}` | Delete a task (optional) |

---

## 📁 Project Structure

```
task-board/
│
├── backend/
│   ├── main.py              # FastAPI app
│   ├── models.py            # SQLAlchemy models
│   ├── database.py          # DB connection
│   └── requirements.txt     # Python dependencies
│
frontend/
├── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── TaskBoard.jsx
│   │   ├── Column.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskModal.jsx
│   └── api.js
│   ├── package.json
│   └── vite.config.js
```

---

## 🎯 Future Improvements

* 🔧 Add task editing and deletion
* 👥 User authentication
* 📆 Due dates and priorities
* 📱 Mobile responsiveness

---

## 🧑‍💻 Author

* **Your Name**
* [Your GitHub](https://github.com/NitishKumar1123/Task-Board.git)

---

## 📝 License

This project is licensed under the Disha AI License.
