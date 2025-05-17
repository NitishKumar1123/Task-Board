import React from "react";
import TaskCard from "./TaskCard";

export default function Column({ title, tasks, onEdit, onDelete }) {
  return (
    <div className="card flex-grow-1" style={{ minWidth: "300px" }}>
      <div className="card-header bg-secondary text-white">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body" style={{ minHeight: "400px" }}>
        {tasks.length === 0 && (
          <p className="text-muted">No tasks</p>
        )}
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
