import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {

  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

   // Get all Notes
   const getNotes = async () => {
    //  API calls
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMzFmZmM3YmQ0NTNiYWZlY2QxMmZjIn0sImlhdCI6MTY5NDg4MjA5NX0.QllagRZ95Ycta23o-_Vr8os90DWt2xmTYy8o5Egr2l8 "
      },
    });
    const json = await response.json();
    console.log(json);
     setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // Todo api call
    //  API calls
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMzFmZmM3YmQ0NTNiYWZlY2QxMmZjIn0sImlhdCI6MTY5NDg4MjA5NX0.QllagRZ95Ycta23o-_Vr8os90DWt2xmTYy8o5Egr2l8 "
      },
      body: JSON.stringify({title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    console.log("adding a new note")
    const note = {
      "_id": "6505ec5b8wsb2ba728bd9786ea",
      "user": "65031ffc7bd453bafecd12fc",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-09-16T17:56:43.767Z",
      "__v": 0
    };

    setNotes(notes.concat(note))
  }

  //  Delete a Note
  const deleteNote = async(id) => {
    //  API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMzFmZmM3YmQ0NTNiYWZlY2QxMmZjIn0sImlhdCI6MTY5NDg4MjA5NX0.QllagRZ95Ycta23o-_Vr8os90DWt2xmTYy8o5Egr2l8 "
      }
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //  API calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMzFmZmM3YmQ0NTNiYWZlY2QxMmZjIn0sImlhdCI6MTY5NDg4MjA5NX0.QllagRZ95Ycta23o-_Vr8os90DWt2xmTYy8o5Egr2l8 "
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)

    let newNotes= JSON.parse(JSON.stringify(notes))
    // Logic to edit in client

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;