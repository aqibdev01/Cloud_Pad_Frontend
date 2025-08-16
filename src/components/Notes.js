import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes } = context;
  useEffect(() => {
    fetchAllNotes()
  },[]);
  return (
    <div className="row my-3">
      <h2>All Notes</h2>
      {notes.map((note) => {
        return <Noteitem key= {note._id} note={note} />;
      })}
    </div>
  );
}

export default Notes;
