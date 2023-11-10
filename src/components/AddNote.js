import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully", "success")

  }

  const onChange = (e) => {
    if (note.title.length < 5) {
      props.showAlert("Title must be atleast of 5 characters", "danger")
    }
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const onChange2 = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className='container my-3'>
        <h1>Add Recipe🫕</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Food Name</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required title='Title must be atleast of 5 characters' />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label ">Ingredients and Process</label>
            <input type="text" className="form-control " id="description" name="description" value={note.description} onChange={onChange2} minLength={5} required title='Description must be atleast of 5 characters' style={{'height':'90px'}} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
          </div>
          <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-warning" onClick={handleClick}>Add Dish</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote

// disabled={note.title.length<5 || note.description.length<5}