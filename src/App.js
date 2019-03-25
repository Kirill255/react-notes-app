import React, { Component } from "react";
import NoteEditor from "./components/NoteEditor";
import NotesGrid from "./components/NotesGrid";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    try {
      const savedNotes = JSON.parse(localStorage.getItem("notes"));

      if (savedNotes) {
        this.setState({ notes: savedNotes });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.saveToLocalStorage();
    }
  }

  handleNoteAdd = (newNote) => {
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  handleNoteDelete = (noteId) => () => {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== noteId) });
  };

  saveToLocalStorage() {
    try {
      const notes = JSON.stringify(this.state.notes);

      localStorage.setItem("notes", notes);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__header">Notes App</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid onNoteDelete={this.handleNoteDelete} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
