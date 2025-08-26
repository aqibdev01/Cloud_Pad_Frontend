import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const authToken = localStorage.getItem("token")
  
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    const url = `${host}/api/notes/fetchAll`;
    const method = "GET";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const jsonResponse = await response.json();
    if(jsonResponse.success){
      setNotes(jsonResponse.note)
    }
    else{
      console.log(jsonResponse.error)
    }
  };

  const addNote = async (title, description, tag) => {
    const url = `${host}/api/notes/addNote`;
    const method = "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          authToken},
      body: JSON.stringify({ title, description, tag }),
    });

    const jsonResponse = await response.json();
    if(jsonResponse.success){
      setNotes((prevNotes) => [...prevNotes, jsonResponse.note]);
    }
    else{
      console.log(jsonResponse.error)
    }
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const jsonResponse = await response.json();
    // console.log(jsonResponse);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    if (response.ok) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
    }
  };

  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deleteNote/${id}`;
    const method = "DELETE";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    // const jsonResponse = await response.json();
    // console.log(jsonResponse);
    if (response.ok) {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, fetchAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
