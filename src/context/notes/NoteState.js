import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesTest = [
    {
      _id: "6898e8cac39200568d891361",
      user: "6894e3a32ec99982518b5d77",
      title: "This is a note",
      description: "Hi agent",
      tag: "Test",
      timestamp: "2025-08-10T18:45:30.734Z",
      __v: 0,
    },
    {
      _id: "6898e8ffc39200568d891363",
      user: "6894e3a32ec99982518b5d77",
      title: "Surprise Gift",
      description: "Surprise Mother and Father Agent",
      tag: "Birthday",
      timestamp: "2025-08-10T18:46:23.030Z",
      __v: 0,
    },
    {
      _id: "6898e916c39200568d891365",
      user: "6894e3a32ec99982518b5d77",
      title: "Birthday ",
      description: "Happy Bitrhday Jan",
      tag: "Test",
      timestamp: "2025-08-10T18:46:46.294Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesTest);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
