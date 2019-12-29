import React, { Component } from 'react';
import ItemCard from '../../common/components/ItemCard';
import SpecCell from '../components/SpecCell';
import ListCell from '../components/ListCell';
import { connect } from 'react-redux';

class HeroPage extends Component {

    render() {
        const { itemsToRender, selectedItem } = this.props;
        const itemToRender = itemsToRender.find(elem => elem.name === selectedItem.name);
        return (
            <table>
                <tr>
                    <td>
                        <ItemCard
                            name={itemToRender.name}
                            image={itemToRender.url}
                        />
                    </td>
                    <td>
                        <SpecCell contents={selectedItem} />
                    </td>
                    <td>
                        <ItemCard
                            name="Earth"
                            image={itemToRender.url} />
                    </td>
                </tr>
                <tr>
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
        itemsToRender: state.appStateSwitcher.itemsToRender
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);