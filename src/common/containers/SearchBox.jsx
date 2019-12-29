import React from 'react';
import '../css/SearchBox.css'

const SearchBox = (props) => {
    return (
        <input
        type="search"
        placeholder={`search ${props.menuButtonClicked}`}
        onChange={props.onSearchBoxChange}
        />

    )
}

export default SearchBox;