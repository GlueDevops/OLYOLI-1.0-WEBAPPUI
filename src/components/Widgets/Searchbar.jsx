import React from 'react'

const Searchbar = () => {
  return (
    <div className='search-container'>
      <input type="text" placeholder='search' className='searchbar' />
      <button className='search-icon-btn'>
        <div className='search-icon'></div>
      </button>
    </div>
  )
}

export default Searchbar