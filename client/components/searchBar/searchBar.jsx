import React from 'react'

const SearchBar = ({
  searchInput,
  setSearchInput
}) => {
  const hasValue = searchInput !== '',
        classes = hasValue ? 'has-value' : ''
  return(
    <div id="search-bar">
      <input 
        id="search-bar-input" 
        className={classes}
        type="search" 
        value={searchInput}
        placeholder="Search"
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>
  )
}

export {SearchBar}