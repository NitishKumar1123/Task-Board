import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body p-2">
        <h6 className="card-title">{task.title}</h6>
        <p className="card-text">{task.description}</p>
        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
