import React from 'react'
import Labels from '../Labels/Labels'

const Sidebar = (props) => {
  const {labels, setLabels, trash, setTrash, archive, setArchive} = {...props}
  return (
    <>
      <aside className="sidebar">
        < Labels labels={labels} />
        <div className="sidebar__elem archive">
          <i class='bx bxs-archive-in' ></i>
          <h2 className='elem__title'>Archive</h2>
        </div>
        <div className="sidebar__elem trash">
          <i class='bx bx-trash' ></i>
          <h2 className='elem__title'>Trash</h2>
        </div>
      </aside>
    </>
  )
}

export default Sidebar