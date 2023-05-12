import React, { useState } from 'react'

const Filter = (props) => {
  const {status, setSelectedStatus} = props

  const changeSelectedStatus = (e) => {
    setSelectedStatus(e.target.value)
  }


  return (
    <div className="filter">
        <div className="filter__by-status">
          <label className='filterByStatus-label' htmlFor="filterByStatus">Filter: </label>
          <select className='filterByStatus' onChange={changeSelectedStatus} name="filterByStatus" id="filterByStatus" value={props.selectedStatus}>
              <option value="all">All</option>
              <option value="inProgress">In progress</option>
              <option value="completed">Completed</option>
          </select>
        </div>
    </div>
  )
}

export default Filter