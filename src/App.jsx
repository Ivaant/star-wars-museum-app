import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import './App.css';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Navigation />
        {/*<SearchBox />
        <Scroll>
            <CardList />
        </Scroll>
        <Footer />*/}
            </Fragment>
        )
    }
}

export default App;