import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenuButtonClick, mountItemsToRender, requestItemsList, setAllImageUrlToNull, handleSearchBoxChange } from '../../redux/actions';
import '../css/Navigation.css';

class Navigation extends Component {

  componentDidMount() {
    const listUrl = this.props.menu[this.props.initialMenuButtonClickedName];
    this.props.onRequestItemsList(listUrl);
  }

  handleMenuButtonClick = (event) => {
    const menuName = event.target.name.toLowerCase();
    this.props.onMenuButtonClick(menuName);
    this.props.mountItemsToRender(menuName);
    
    const listUrl = this.props.menu[menuName];
    this.props.onRequestItemsList(listUrl);
    this.props.setAllImageUrlToNull();
    this.props.clearSearchBoxChange('');
}

  mapper = (name, index) => {
    return (
      <li key={index}><button
        onClick={this.handleMenuButtonClick}
        name={name}
      >{name.toUpperCase()}</button>
      </li>
    )
  }

  render() {
    const menuNames = Object.keys(this.props.menu);
    return (
      <nav>
        <ul>
          {menuNames.map(this.mapper)}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.requestMenu.menu,
    initialMenuButtonClickedName: state.appStateSwitcher.menuButtonClickedName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMenuButtonClick: (menuName) => dispatch(setMenuButtonClick(menuName)),
    mountItemsToRender: (assetName) => dispatch(mountItemsToRender(assetName)),
    onRequestItemsList: listUrl => dispatch(requestItemsList(listUrl)),
    setAllImageUrlToNull: () => dispatch(setAllImageUrlToNull()),
    clearSearchBoxChange: (emptyString) => dispatch(handleSearchBoxChange(emptyString))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
