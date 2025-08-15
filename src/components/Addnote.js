import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function Addnote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleSubmit = () => {
    addNote(note.title, note.description, note.tag);
  };
  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div className="my-3">
      <h2>Create Note</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          placeholder="Tag"
          onChange={handleOnChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        <i className="fa-solid fa-circle-plus mx-1"></i>
        Add
      </button>
    </div>
  );
}

export default Addnote;
