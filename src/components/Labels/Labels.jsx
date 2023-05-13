import React from 'react'

const Labels = (props) => {
  const labels = props.labels;
  return (
    <>
      <div className="sidebar__elem">
        <i class='bx bx-note' ></i>
        <h2 className='elem__title'>Notes</h2>
      </div>
      {
        labels.map((elem) => (
          <div className="sidebar__elem">
            <i class='bx bxs-label' ></i>
            <h2 className="elem__title">{elem}</h2>
          </div>
        ))
      }
    </>
  )
}

export default Labels