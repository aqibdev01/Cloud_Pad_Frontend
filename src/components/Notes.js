import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="row my-3">
      <h2>All Notes</h2>
      {notes.map((notes) => {
        return <Noteitem note={notes} />;
      })}
    </div>
  );
}

export default Notes;
