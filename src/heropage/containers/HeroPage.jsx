import React, { Component } from 'react';
import ImageCell from '../components/ImageCell';
import SpecCell from '../components/SpecCell';
import ListCell from '../components/ListCell';
import { connect } from 'react-redux';
import '../css/HeroPage.css';

class HeroPage extends Component {

    render() {
        const { itemsToRender, selectedItem,
            homeworldData, hwDataIsPending,
            filmsDataIsPending, filmsNames } = this.props;
        console.log("filmesNames", filmsNames);
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
                        {hwDataIsPending ?
                            <ImageCell
                                name={homeworldData.name}
                                image={homeworldData.url}
                            />
                            :
                            <ImageCell
                                name={homeworldData.name}
                                image={homeworldData.url}
                            />
                        }
                    </td>
                </tr>
                <tr className="hero-item">
                    <td>
                        {filmsDataIsPending ?
                            <p>Films are loading...</p>
                            : <ListCell
                                header="films"
                                contents={filmsNames}
                            />
                        }
                    </td>
                    <td>
                        <ListCell />
                    </td>
                    <td>
                        <ListCell />
                    </td>
                </tr>

                {/*
        <ListCell vehicles={people.vehicles} />
        <ListCell starships={people.starships} />*/}
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.appStateSwitcher.selectedItem,
        homeworldData: state.setHeroPageState.homeworld,
        hwDataIsPending: state.setHeroPageState.hwDataIsPending,
        filmsDataIsPending: state.setHeroPageState.filmsDataIsPending,
        filmsNames: state.setHeroPageState.filmsNames,
        itemsToRender: state.appStateSwitcher.itemsToRender
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);