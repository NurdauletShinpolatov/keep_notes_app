import React from 'react'
import AddNewNote from '../AddNewNote/AddNewNote'

const ex = {
    id: "n1",
    title: "What I need to do today",
    tasks: [
        {
            value: "Go to classes",
            completed: true,
            id: "a1"
        },
        {
            value: "Go to Uacademy",
            completed: false,
            id: "a12047236154" // which is the result of "a"+Date() (or Date.now())
        },
        {
            value: "Cook dinner",
            completed: false,
            id: "a203945748"
        }
    ],
    edited: 13/4/2023,
    background: "#ff49bb",
    labels: ["University", "Work", "Today"]
}

const Notes = (props) => {
    const {notes, setNotes} = {...props};

    const openNote = (id) => {
        
    }

    const notesJSX = notes.map((note) => (
        <>
            <div key={note.id} onClick={() => openNote(note.id)} className="note">
                <h2 className="note__title">
                    {note.title}
                </h2>
                {
                    note.tasks.map((task) => (
                        <div className="note__task">
                            {
                                task.completed ? (
                                    <i class='bx bx-checkbox' ></i>
                                ) : (
                                    <i class='bx bx-checkbox-checked' ></i>
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
            </div>
        </>
    )
}

export default Notes