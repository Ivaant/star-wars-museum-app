import React from 'react';
import './css/SearchBox.css'

const SearchBox = (props) => {
    return (
        <input
        type="search"
        placeholder="search heroes"
        onChange={props.onSearchBoxChange}
        />

    )
}

export default SearchBox;