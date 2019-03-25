import React, { Component } from "react";
import NoteEditor from "./components/NoteEditor";
import NotesGrid from "./components/NotesGrid";

class App extends Component {
  state = {
    notes: [{ id: 1, color: "yellow", text: "first note" }]
  };

  handleNoteAdd = (newNote) => {
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

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
