import React, { Component, Fragment } from 'react';
import Header from './common/Header';
import './App.css';

class App extends Component {

    render() {
        return (
            <Fragment className="app">
                <Header />
                {/*<Navigation />
        <HeroPage />
        <Footer />*/}
            </Fragment>
        )
    }
}

export default App;