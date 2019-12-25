import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import SearchBox from './common/SearchBox';
import CardList from './common/CardList';
import Scroll from './common/Scroll';
import Footer from './common/Footer';
import { connect } from 'react-redux';
import { setMenuButtonClick, handleSearchBoxChange, mountItemsToRender } from './redux/actions';
import './App.css';

const mapStateToProps = state => {
    return {
        menuButtonClicked: state.menuButtonClickedName,
        searchBoxInput: state.searchBoxInput,
        itemsToRender: state.itemsToRender
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuButtonClick: (event) => dispatch(setMenuButtonClick(event.target.name)),
        onSearchBoxChange: (event) => dispatch(handleSearchBoxChange(event.target.value)),
        mountItemsToRender: (assetName) => dispatch(mountItemsToRender(assetName))
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.props.mountItemsToRender(this.props.menuButtonClicked);
        this.state = {
            // searchBoxInput: '',
            menu: {},
            //itemsToRender: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/')
            .then(response => response.json())
            .then(contents => this.setState(
                { menu: contents }));
        this.props.mountItemsToRender(this.props.menuButtonClicked);
    }

    handleMenuButtonClick = (event) => {
        this.props.onMenuButtonClick(event);
        this.props.mountItemsToRender(event.target.name);
    }

    render() {
        const { searchBoxInput, itemsToRender } = this.props;
        const menuNames = Object.keys(this.state.menu);
        const filteredItems = itemsToRender.filter(item => {
            return item.name.toLowerCase().includes(searchBoxInput.toLowerCase());
        })
        return (
            <Fragment>
                <Header />
                {
                    !menuNames.length ?
                        <h1>MENU IS LOADING...</h1> :
                        <Navigation
                            menuNames={menuNames}
                            onMenuClick={this.handleMenuButtonClick}
                        />
                }
                <SearchBox onSearchBoxChange={this.props.onSearchBoxChange} />
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