import React from 'react';
import { connect } from 'react-redux';
import { setMenuButtonClick, mountItemsToRender, requestItemsList, setAllImageUrlToNull, handleSearchBoxChange } from '../../redux/actions';
import '../css/Header.css';

function Header(props) {

    const handleMenuButtonClick = () => {
        const menuName = "people";
        props.onMenuButtonClick(menuName);
        props.mountItemsToRender(menuName);
        
        const listUrl = props.menu[menuName];
        props.onRequestItemsList(listUrl);
        props.setAllImageUrlToNull();
        props.clearSearchBoxChange('');
    }

    return (
        <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
                    alt="StarWars logo"
                    onClick={handleMenuButtonClick} />
        </header>

    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);