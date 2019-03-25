import React from "react";

const Note = ({ children, color }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Note;
