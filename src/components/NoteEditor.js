import React, { Component } from "react";

export default class NoteEditor extends Component {
  state = {
    text: ""
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleNoteAdd = () => {
    const newNote = {
      id: Date.now().toString(),
      text: this.state.text,
      color: "yellow"
    };

    this.props.onNoteAdd(newNote);

    this.resetState();
  };

  resetState() {
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="editor">
        <textarea
          className="editor__textarea"
          rows="5"
          placeholder="Enter your note..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button className="editor__button" disabled={!this.state.text} onClick={this.handleNoteAdd}>
          Add
        </button>
      </div>
    );
  }
}
