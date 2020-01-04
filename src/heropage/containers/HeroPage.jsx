import React, { Component } from 'react';
import ImageCell from '../components/ImageCell';
import SpecCell from '../components/SpecCell';
import ListCell from '../components/ListCell';
import { connect } from 'react-redux';
import '../css/HeroPage.css';
import '../../assets/assets';
import assets from '../../assets/assets';

class HeroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedListCellName: '',
            isPosterClicked: {},
            clickedFilm: {}
        }
    }

    handleClickedLinkName = (header, linkName) => {
        const linkObj = assets[header].filter(elem => elem.name === linkName);
        if (linkObj) {
            console.log(linkObj[0]);
            this.setState({ clickedFilm: linkObj[0] });
        }
        console.log(this.state.clickedUrl);
    }

    render() {
        const { itemsToRender, selectedItem,
            homeworldData,
            filmsIsPending, filmsNames,
            vehiclesIsPending, vehiclesNames,
            starshipsIsPending, starshipsNames } = this.props;
        //console.log("homeworldData", homeworldData);
        const itemToRender = itemsToRender.find(elem => elem.name === selectedItem.name);
        return (
            <table className="table">
                <tr className="hero-item">
                    <td>
                        <ImageCell
                            name={itemToRender.name}
                            image={itemToRender.url}
                        />
                    </td>
                    <td>
                        <SpecCell contents={selectedItem} />
                    </td>
                    <td>
                        <ImageCell
                            name={homeworldData.name}
                            image={homeworldData.url}
                        />
                    </td>
                </tr>
                <tr className="hero-item">
                    <td>
                        {filmsIsPending ?
                            <p>Films are loading...</p>
                            : <ListCell
                                header="films"
                                contents={filmsNames}
                                //poster={this.state.clickedPoster}
                                onLinkClick={this.handleClickedLinkName}
                            />
                        }
                    </td>
                    <td>
                        {vehiclesIsPending ?
                            <p>Vehicles are loading...</p>
                            : <ListCell
                                header="vehicles"
                                contents={vehiclesNames}
                                //poster={this.state.clickedPoster}
                                onLinkClick={this.handleClickedLinkName}
                            />
                        }
                    </td>
                    <td>
                        {starshipsIsPending ?
                            <p>Starships are loading...</p>
                            : <ListCell
                                header="starships"
                                contents={starshipsNames}
                                //poster={this.state.clickedFilm}
                                onLinkClick={this.handleClickedLinkName}
                            />
                        }
                    </td>
                </tr>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemsToRender: state.appStateSwitcher.itemsToRender,
        selectedItem: state.appStateSwitcher.selectedItem,
        homeworldData: state.setHeroPageState.homeworld,
        hwDataIsPending: state.setHeroPageState.hwDataIsPending,
        filmsIsPending: state.setHeroPageState.filmsIsPending,
        vehiclesIsPending: state.setHeroPageState.vehiclesIsPending,
        starshipsIsPending: state.setHeroPageState.starshipsIsPending,
        filmsNames: state.setHeroPageState.films,
        vehiclesNames: state.setHeroPageState.vehicles,
        starshipsNames: state.setHeroPageState.starships

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);