import React, { useRef, useState } from 'react'

const OpenNote = (props) => {
    const {selectedNote, setSelectedNote, notes, setNotes} = {...props};
    const [typedOnNewTask, setTypedOnNewTask] = useState(false);
    
    // adding a new task
    const [newTaskValue, setNewTaskValue] = useState("");
    const newTaskInput = useRef();
    const addNewTaskDiv = useRef();

    // editing a task
    const [onEdit, setOnEdit] = useState("");

    const addNewTaskFocus = () => {
        addNewTaskDiv.current.classList.add("addNewTask__focused");
        console.log(addNewTaskDiv.current.classList)
        newTaskInput.current.focus();
    }

    const addNewTask = (e) => {
        newTaskInput.current.blur();
        addNewTaskDiv.current.classList.remove("addNewTask__focused");
        const newTask = {
            id: "t"+Date.now(),
            value: e.target.value,
            completed: false
        }
        setNotes(notes.map((note) => {
            if (note.id == selectedNote) {
                note.tasks = [...note.tasks, newTask]
            }
            return note
        }));
    }

    // editing a task
    const enableEdit = (id) => {
        const onEditTaskDiv = document.querySelector("#"+id);
        onEditTaskDiv.classList.add("noteTask__focused");
    }

    // rendering 
    const noteJSX = notes
        .filter((note) => selectedNote == note.id)
        .map((note) => (
            <>
                <div key={note.id} className="openNote">
                    <div className="noteTitle">{note.title}</div>
                    <div className="noteTasks">
                    {note.tasks.map((task) => (
                        <div key={task.id} id={task.id} className="noteTask">
                            <i class="bx reOrderTask bx-list-ul"></i>
                            {task.completed ? (
                                <i class="bx bx-checkbox-checked"></i>
                            ) : (
                                <i class="bx bx-checkbox"></i>
                            )}
                            {/* <p className="noteTask__value">{task.value}</p> */}
                            <input 
                                value={task.value}
                                onClick={()=>{enableEdit(task.id)}}
                                type="text"
                                className='noteTask__value'
                            />
                            <i class="deleteTask bx bx-x"></i>
                        </div>
                    ))}
                    </div>
                    <div
                        ref={addNewTaskDiv}
                        className="addNewTaskDiv"
                    >
                        {
                            typedOnNewTask ? (
                                <i class="bx bx-checkbox"></i>
                            ) : (
                                <i class="bx bx-plus"></i>
                            )
                        }
                        <input
                            ref={newTaskInput}
                            value={newTaskValue}
                            onChange={addNewTask}
                            className="addNewTask__value"
                            type="text"
                            placeholder="Task..."
                        />
                        {
                            typedOnNewTask ? (
                                <i class="bx bx-x"></i>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </>
      ));

    const handleClick = (e) => {
        // console.log(e.target.classList[0]);
        switch (e.target.classList[0]) {
            case "background":
                setSelectedNote("");
                break;
            case "addNewTaskDiv":
                addNewTaskFocus();
                break;
            case "addNewTask__value":
                addNewTaskFocus();
                break;
            // case "bx":
            //     console.log("icooon");
            //     break;
            
            default:
                break;
        }
    }

    return (
        <>
            <div onClick={handleClick} className="background">
                {noteJSX}
            </div>
        </>
    )
}

export default OpenNote