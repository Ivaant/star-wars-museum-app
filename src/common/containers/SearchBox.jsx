import React from 'react';
import { connect } from 'react-redux';
import { handleSearchBoxChange } from '../../redux/actions';
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

const mapStateToProps = state => {
    return {
        menuButtonClicked: state.appStateSwitcher.menuButtonClickedName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchBoxChange: (event) => dispatch(handleSearchBoxChange(event.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);