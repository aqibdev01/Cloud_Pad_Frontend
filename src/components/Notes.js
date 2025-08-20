import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes, editNote } = context;
    const ref = useRef(null);
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
  useEffect(() => {
    fetchAllNotes();
    //eslint-disable-next-line
  }, []);
    const handleUpdate = (currentNote) => {
    console.log(currentNote)
    setNote({
      id: currentNote._id, // store ID so we know which note to update
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    ref.current.click();
  };

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    document.getElementById("closeModalBtn").click();
  };

  return (
    <div className="row my-3">
      
      <h2>All Notes</h2>
      <button
        ref={ref}
        type="button"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="closeModalBtn"
      ></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <label htmlFor="etitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="etitle"
                name="etitle"
                value={note.etitle}
                placeholder="Title"
                onChange={handleOnChange}
              />
              <label htmlFor="edescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="edescription"
                name="edescription"
                value={note.edescription}
                placeholder="Description"
                onChange={handleOnChange}
                />
              <label htmlFor="etag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="etag"
                name="etag"
                value={note.etag}
                placeholder="Tag"
                onChange={handleOnChange}
                />
                </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
      </div>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={handleUpdate} elementNote={note} />;
      })}
    </div>
  );
}

export default Notes;
