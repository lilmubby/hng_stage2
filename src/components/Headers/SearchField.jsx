import React from 'react'
import "./SearchField.css"

const SearchField = () => {
  return (
    <div className='search_container'>
      <input type='search' placeholder='What do you want to watch?' />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  )
}

export default SearchField