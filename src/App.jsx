import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import SearchBox from './common/SearchBox';
import CardList from './common/CardList';
import { peopleURLs } from './assets/imageURLs';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBoxInput: ''
        }
    }

    handleSearchBoxChange = (event) => {
        this.setState({searchBoxInput: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Navigation />
        <SearchBox onSearchBoxChange={this.handleSearchBoxChange} />
        <CardList
            data={peopleURLs}
         />
        {/*<Scroll>
            <CardList />
        </Scroll>
        <Footer />*/}
            </Fragment>
        )
    }
}

export default App;