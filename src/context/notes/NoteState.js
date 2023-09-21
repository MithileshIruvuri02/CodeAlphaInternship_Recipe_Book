import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "6505ec5a8b2ba728bd9786e8",
          "user": "65031ffc7bd453bafecd12fc",
          "title": "My Title2",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-09-16T17:56:42.739Z",
          "__v": 0
        },
        {
          "_id": "6505ec5b8b2ba728bd9786ea",
          "user": "65031ffc7bd453bafecd12fc",
          "title": "My Title2",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-09-16T17:56:43.767Z",
          "__v": 0
        }
      ]
      const [notes, setNotes]=useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </NoteContext.Provider>   
    )
}

export default NoteState;