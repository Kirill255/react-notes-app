import React from "react";

const Note = ({ children, id, color, onDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <span className="note__delete-icon" onClick={onDelete(id)}>
        ˣ
      </span>
      {children}
    </div>
  );
};

export default Note;
