import React, { useState } from 'react'
import AddNewNote from '../AddNewNote/AddNewNote'
import OpenNote from '../OpenNote/OpenNote';

const ex = {
    id: "n1",
    title: "What I need to do today",
    tasks: [
        {
            value: "Go to classes",
            completed: true,
            id: "t1"
        },
        {
            value: "Go to Uacademy",
            completed: false,
            id: "t12047236154" // which is the result of "a"+Date() (or Date.now())
        },
        {
            value: "Cook dinner",
            completed: false,
            id: "t203945748"
        }
    ],
    edited: 13/4/2023,
    background: "#ff49bb",
    labels: ["University", "Work", "Today"]
}

const Notes = (props) => {
    const {notes, setNotes} = {...props};
    const [selectedNote, setSelectedNote] = useState("");

    const openNote = (id) => {
        setSelectedNote(id);
    }
    console.log("notes");

    const notesJSX = notes.map((note) => (
        <>
            <div key={note.id} onClick={() => openNote(note.id)} className="note">
                <h2 className="note__title">
                    {note.title}
                </h2>
                {
                    note.tasks.map((task) => (
                        <div key={task.id} className="note__task">
                            {
                                task.completed ? (
                                    <i class='bx bx-checkbox-checked' ></i>
                                ) : (
                                    <i class='bx bx-checkbox' ></i>
                                )
                            }
                            <p className='note__task-value'>
                                {task.value}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    ))

    return (
        <>
            <div className="notes">
                <AddNewNote />
                <div className="notes__container">
                    {notesJSX}
                </div>
                {
                    selectedNote != "" ?(
                        <OpenNote selectedNote={selectedNote} setSelectedNote={setSelectedNote} notes={notes} setNotes={setNotes} />
                    ):(
                        <></>
                    )
                }
            </div>
        </>
    )
}

export default Notes