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

  handleNoteAdd = (newNote) => {
    this.setState({ notes: [newNote, ...this.state.notes] }, this.saveToLocalStorage);
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
        <NotesGrid notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
