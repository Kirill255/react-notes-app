import React, { Component } from "react";
import Masonry from "masonry-layout";
import Note from "./Note";

class NotesGrid extends Component {
  componentDidMount() {
    this.masonry = new Masonry(this.grid, {
      columnWidth: 240,
      gutter: 10,
      fitWidth: true // isFitWidth: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.notes !== this.props.notes) {
      this.masonry.reloadItems();
      this.masonry.layout();
    }
  }

  componentWillUnmount() {
    this.masonry.destroy();
  }

  setNotesGridRef = (ref) => {
    this.grid = ref;
  };

  render() {
    const { notes, onNoteDelete } = this.props;
    return (
      <div className="grid" ref={this.setNotesGridRef}>
        {notes.map((note) => (
          <Note key={note.id} id={note.id} color={note.color} onDelete={onNoteDelete}>
            {note.text}
          </Note>
        ))}
      </div>
    );
  }
}

export default NotesGrid;
