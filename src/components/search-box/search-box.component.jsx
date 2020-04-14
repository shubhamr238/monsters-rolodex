import React from 'react';

import './search-bos.style.css';

export const SearchBox=({placeholder, handleChange})=>{
    return(
        <input
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
      />
    )
}