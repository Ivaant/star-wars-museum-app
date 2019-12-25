import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import SearchBox from './common/SearchBox';
import CardList from './common/CardList';
import Scroll from './common/Scroll';
import Footer from './common/Footer';
import { connect } from 'react-redux';
import { setMenuButtonClick, handleSearchBoxChange } from './redux/actions';
import { peopleURLs } from './assets/imageURLs';
import './App.css';

const mapStateToProps = state => {
    return {
        menuButtonClicked: state.menuButtonClicked,
        searchBoxInput: state.searchBoxInput
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuButtonClick: (event) => dispatch(setMenuButtonClick(event.target.name)),
        onSearchBoxChange: (event) => dispatch(handleSearchBoxChange(event.target.value))
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBoxInput: '',
            menu: {},
            itemsToRender: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/')
            .then(response => response.json())
            .then(contents => this.setState(
                { menu: contents }));
        this.setState({ itemsToRender: peopleURLs });
    }

    handleSearchBoxChange = (event) => {
        this.setState({ searchBoxInput: event.target.value });
    }

    render() {
        const { searchBoxInput } = this.props;
        const menuNames = Object.keys(this.state.menu);
        const filteredItems = this.state.itemsToRender.filter(item => {
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
                            onMenuClick={this.props.onMenuButtonClick}
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