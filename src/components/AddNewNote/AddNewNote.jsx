import React from 'react'

const AddNewNote = () => {
    const addNewNote = (e) => {
        console.log(e.target);
    }
  return (
    <>
        <div className="addNewNote__container">
            <div className="addNewNote" onClick={addNewNote}>
                <p className='placeholder'>Take a note...</p>
                <div className="icon__bg">
                    <i class='bx bx-checkbox-checked' ></i>
                </div>
                <div className="icon__bg">
                    <i class='bx bx-pencil' ></i>
                </div>
                <div className="icon__bg">
                    <i class='bx bx-image-alt' ></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddNewNote