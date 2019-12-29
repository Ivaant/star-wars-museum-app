import React, { Component, Fragment } from 'react';
import Header from './common/components/Header';
import Navigation from './common/containers/Navigation';
import SearchBox from './common/containers/SearchBox';
import CardList from './mainpage/CardList';
import Scroll from './common/components/Scroll';
import Footer from './common/components/Footer';
import { connect } from 'react-redux';
import { requestMenu } from './redux/actions';

import './App.css';

const mapStateToProps = state => {
    return {
        isPending: state.requestMenu.isPending
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestMenu: () => dispatch(requestMenu())
    }
}


class App extends Component {

    componentDidMount() {
        this.props.onRequestMenu();
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    this.props.isPending ?
                        <h1>MENU IS LOADING...</h1> :
                        <Navigation />
                }
                <SearchBox />
                <Scroll>
                    <CardList />
                </Scroll>
                <Footer />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);