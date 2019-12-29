import React, { Component, Fragment } from 'react';
import Header from './common/components/Header';
import Navigation from './common/containers/Navigation';
import SearchBox from './common/containers/SearchBox';
import CardList from './mainpage/CardList';
import HeroPage from './heropage/containers/HeroPage';
import Scroll from './common/components/Scroll';
import Footer from './common/components/Footer';
import { connect } from 'react-redux';
import { requestMenu } from './redux/actions';

import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.onRequestMenu();
    }

    render() {
        const { menuButtonClickedName, selectedItem } = this.props;
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
                    {selectedItem ?
                        {
                            people: <HeroPage />,
                            planets: <HeroPage />,
                            films: <HeroPage />,
                            species: <HeroPage />,
                            vehicles: <HeroPage />,
                            starships: <HeroPage />
                        }[menuButtonClickedName]
                        : <CardList />}
                </Scroll>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPending: state.requestMenu.isPending,
        menuButtonClickedName: state.appStateSwitcher.menuButtonClickedName,
        selectedItem: state.appStateSwitcher.selectedItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestMenu: () => dispatch(requestMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);