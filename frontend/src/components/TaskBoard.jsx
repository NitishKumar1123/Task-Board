import React, { useState } from "react";
import Column from "./Column";
import TaskModal from "./TaskModal";

const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export default function TaskBoard({ tasks, onCreate, onUpdate, onDelete }) {
  const [modalTask, setModalTask] = useState(null); // null = no modal open

  function openModal(task = null) {
    setModalTask(task);
  }

  function closeModal() {
    setModalTask(null);
  }

  function handleSave(task) {
    if (task.id) {
      onUpdate(task.id, task);
    } else {
      onCreate(task);
    }
    closeModal();
  }

  return (
    <>
      <div className="d-flex gap-3">
        {COLUMNS.map((col) => (
          <Column
            key={col.id}
            title={col.title}
            tasks={tasks.filter((t) => t.status === col.id)}
            onEdit={openModal}
            onDelete={onDelete}
          />
        ))}
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => openModal()}
      >
        + Add Task
      </button>

      {modalTask !== null && (
        <TaskModal
          task={modalTask}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </>
  );
}
