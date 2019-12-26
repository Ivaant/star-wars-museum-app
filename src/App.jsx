import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import SearchBox from './common/SearchBox';
import CardList from './common/CardList';
import Scroll from './common/Scroll';
import Footer from './common/Footer';
import { connect } from 'react-redux';
import {
    setMenuButtonClick,
    handleSearchBoxChange,
    mountItemsToRender,
    requestMenu,
    requestItemsList
} from './redux/actions';

import './App.css';

const mapStateToProps = state => {
    return {
        menuButtonClicked: state.appStateSwitcher.menuButtonClickedName,
        searchBoxInput: state.appStateSwitcher.searchBoxInput,
        itemsToRender: state.appStateSwitcher.itemsToRender,
        isPending: state.requestMenu.isPending,
        menu: state.requestMenu.menu,
        itemsList: state.requestItemsList.itemsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuButtonClick: (menuName) => dispatch(setMenuButtonClick(menuName)),
        onSearchBoxChange: (event) => dispatch(handleSearchBoxChange(event.target.value)),
        mountItemsToRender: (assetName) => dispatch(mountItemsToRender(assetName)),
        onRequestMenu: () => dispatch(requestMenu()),
        onRequestItemsList: listUrl => dispatch(requestItemsList(listUrl))
    }
}


class App extends Component {

    componentDidMount() {
        this.props.onRequestMenu();
    }

    handleMenuButtonClick = (event) => {
        const menuName = event.target.name.toLowerCase();
        this.props.onMenuButtonClick(menuName);
        this.props.mountItemsToRender(menuName);
        const listUrl = this.props.menu[menuName];
        this.props.onRequestItemsList(listUrl);
    }

    render() {
        const { searchBoxInput, itemsToRender, isPending, menu } = this.props;
        const menuNames = Object.keys(menu);
        const filteredItems = itemsToRender.filter(item => {
            return item.name.toLowerCase().includes(searchBoxInput.toLowerCase());
        })
        return (
            <Fragment>
                <Header />
                {
                    isPending ?
                        <h1>MENU IS LOADING...</h1> :
                        <Navigation
                            menuNames={menuNames}
                            onMenuClick={this.handleMenuButtonClick}
                        />
                }
                <SearchBox
                    onSearchBoxChange={this.props.onSearchBoxChange}
                    menuButtonClicked={this.props.menuButtonClicked} />
                <Scroll>
                    <CardList
                        data={filteredItems}
                    />
                </Scroll>
                <Footer />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);