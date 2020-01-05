import React, { Component } from 'react';
import ImageCell from '../components/ImageCell';
import SpecCell from '../components/SpecCell';
import ListCell from '../components/ListCell';
import { connect } from 'react-redux';
import { setImageUrlToRender } from '../../redux/actions';
import '../css/HeroPage.css';

class HeroPage extends Component {

    handleClickedLinkName = (header, linkName) => {
        this.props.setImageUrlToRender(header, linkName);
    }

    handlePosterClicked = (header) => {
        this.props.setImageUrlToRender(header, null);
    }

    render() {
        const { itemsToRender, selectedItem, homeworldData,
            filmsIsPending, filmsNames, vehiclesIsPending, vehiclesNames,
            starshipsIsPending, starshipsNames, imageUrlsToRender } = this.props;

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
                                poster={imageUrlsToRender.films}
                                onLinkClick={this.handleClickedLinkName}
                                onPosterClick={this.handlePosterClicked}
                            />
                        }
                    </td>
                    <td>
                        {vehiclesIsPending ?
                            <p>Vehicles are loading...</p>
                            : <ListCell
                                header="vehicles"
                                contents={vehiclesNames}
                                poster={imageUrlsToRender.vehicles}
                                onLinkClick={this.handleClickedLinkName}
                                onPosterClick={this.handlePosterClicked}
                            />
                        }
                    </td>
                    <td>
                        {starshipsIsPending ?
                            <p>Starships are loading...</p>
                            : <ListCell
                                header="starships"
                                contents={starshipsNames}
                                poster={imageUrlsToRender.starships}
                                onLinkClick={this.handleClickedLinkName}
                                onPosterClick={this.handlePosterClicked}
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
        starshipsNames: state.setHeroPageState.starships,
        imageUrlsToRender: state.setHeroPageState.imageUrlsToRender
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImageUrlToRender: (header, linkName) => dispatch(setImageUrlToRender(header, linkName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);