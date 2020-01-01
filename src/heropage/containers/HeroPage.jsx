import React, { Component } from 'react';
import ImageCell from '../components/ImageCell';
import SpecCell from '../components/SpecCell';
import ListCell from '../components/ListCell';
import { connect } from 'react-redux';
import { requestHomeworld } from '../../redux/actions';
import '../css/HeroPage.css';

class HeroPage extends Component {

    componentDidMount() {
        this.props.requestHomeworld(this.props.selectedItem.homeworld);
    }

    render() {
        const { itemsToRender, selectedItem, homeworldData } = this.props;
        console.log(selectedItem);
        console.log("homeworldData", homeworldData);
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
                            image={homeworldData.url} />
                    </td>
                </tr>
                <tr className="hero-name">
                    <td>
                        <ListCell />
                    </td>
                    <td>
                        <ListCell />
                    </td>
                    <td>
                        <ListCell />
                    </td>
                </tr>

                {/*<SpecCell />
        <ItemCard homeworld={people.homeworld} />
        <ListCell films={people.films} />
        <ListCell vehicles={people.vehicles} />
        <ListCell starships={people.starships} />*/}
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.appStateSwitcher.selectedItem,
        homeworldData: state.setHomeworldData.homeworld,
        itemsToRender: state.appStateSwitcher.itemsToRender
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestHomeworld: hwUrl => dispatch(requestHomeworld(hwUrl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);