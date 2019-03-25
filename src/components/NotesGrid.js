import React from "react";
import Note from "./Note";

const NotesGrid = ({ notes }) => {
  return (
    <div className="grid">
      {notes.map((note) => (
        <Note key={note.id} color={note.color}>
          {note.text}
        </Note>
      ))}
    </div>
  );
};

export default NotesGrid;
