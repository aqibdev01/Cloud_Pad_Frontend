import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMGQxYzIyMTEzNTA1MjQwZGUwZjU3In0sImlhdCI6MTc1NTM3MTg5Nn0.ibRbbxtoPjhc1-XpN9e6qEuxfRifo9A543ZOmGh0ofs";
  const notesTest = [];

  const [notes, setNotes] = useState(notesTest);

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
    const jsonResponse = response.json();
    console.log(jsonResponse);
  };

  const addNote = async (title, description, tag) => {
    const url = `${host}/api/notes/addNote`;
    const method = "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMGQxYzIyMTEzNTA1MjQwZGUwZjU3In0sImlhdCI6MTc1NTM3MTg5Nn0.ibRbbxtoPjhc1-XpN9e6qEuxfRifo9A543ZOmGh0ofs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };

  const editNote = async (id, title, description, tag) => {
    const url = `${host}/api/notes/updateNote${id}`;
    const method = "PUT";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const jsonResponse = response.json();
    console.log(jsonResponse);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deleteNote${id}`;
    const method = "DELETE";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const jsonResponse = response.json();
    console.log(jsonResponse);
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
