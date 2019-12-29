import React, { Component, Fragment } from 'react';
import Header from './common/components/Header';
import Navigation from './common/containers/Navigation';
import SearchBox from './common/containers/SearchBox';
import CardList from './mainpage/CardList';
import Scroll from './common/components/Scroll';
import Footer from './common/components/Footer';
import { connect } from 'react-redux';
import {
    setMenuButtonClick,
    requestMenu
} from './redux/actions';

import './App.css';

const mapStateToProps = state => {
    return {
        //menuButtonClicked: state.appStateSwitcher.menuButtonClickedName,
        searchBoxInput: state.appStateSwitcher.searchBoxInput,
        itemsToRender: state.appStateSwitcher.itemsToRender,
        isPending: state.requestMenu.isPending,
        //itemsList: state.requestItemsList.itemsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //onMenuButtonClick: (menuName) => dispatch(setMenuButtonClick(menuName)),
        
        //mountItemsToRender: (assetName) => dispatch(mountItemsToRender(assetName)),
        onRequestMenu: () => dispatch(requestMenu()),
        //onRequestItemsList: listUrl => dispatch(requestItemsList(listUrl))
    }
}


class App extends Component {

    componentDidMount() {
        this.props.onRequestMenu();
    }

    render() {
        const { searchBoxInput, itemsToRender, isPending } = this.props;
        const filteredItems = itemsToRender.filter(item => {
            return item.name.toLowerCase().includes(searchBoxInput.toLowerCase());
        })
        return (
            <Fragment>
                <Header />
                {
                    isPending ?
                        <h1>MENU IS LOADING...</h1> :
                        <Navigation />
                }
                <SearchBox />
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