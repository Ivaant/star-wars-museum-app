import React, { Component } from 'react';
import ItemCard from '../common/components/ItemCard';
import { connect } from 'react-redux';
import { setSelectedItem, requestHomeworld, requestFilmsNames } from '../redux/actions';
import './css/CardList.css';

class CardList extends Component {


    handleCardClick = (name) => {
        const selectedItem = this.props.itemsList.find(elem => elem.name === name);
        async function setSelectedItem() {
            await this.props.setSelectedItem(selectedItem);
            await this.props.requestHomeworld(selectedItem.homeworld);
            await this.props.requestFilmsNames(selectedItem.films);
        }
        setSelectedItem.call(this);
    }

    render() {
        const filteredItems = this.props.itemsToRender.filter(item => {
            return item.name.toLowerCase().includes(this.props.searchBoxInput.toLowerCase());
        })
        return (
            <div className="container" >
                {filteredItems.map((item, index) => {
                    return (
                        <ItemCard
                            key={index}
                            itemIndex={index}
                            image={item.url}
                            name={item.name}
                            onCardClick={this.handleCardClick}
                        />
                    );
                })
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        searchBoxInput: state.appStateSwitcher.searchBoxInput,
        itemsToRender: state.appStateSwitcher.itemsToRender,
        itemsList: state.requestItemsList.itemsList,
        selectedItem: state.appStateSwitcher.selectedItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedItem: item => dispatch(setSelectedItem(item)),
        requestHomeworld: hwUrl => dispatch(requestHomeworld(hwUrl)),
        requestFilmsNames: filmsUrl => dispatch(requestFilmsNames(filmsUrl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);