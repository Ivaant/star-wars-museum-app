import React, { Component } from 'react';
import ItemCard from '../common/components/ItemCard';
import { connect } from 'react-redux';
import { setSelectedItem, requestHomeworld, requestNames, handleSearchBoxChange } from '../redux/actions';
import './css/CardList.css';

class CardList extends Component {


    handleCardClick = (name) => {
        this.props.clearSearchBoxChange('');
        if (this.props.menuButtonClickedName === "people") {
            
            async function setSelectedItem() {
                const selectedItem = await this.props.itemsList.find(elem => elem.name === name);
                await this.props.setSelectedItem(selectedItem);
                await this.props.requestHomeworld(selectedItem.homeworld);
                await this.props.requestNames("films", selectedItem.films);
                await this.props.requestNames("vehicles", selectedItem.vehicles);
                await this.props.requestNames("starships", selectedItem.starships);
            }
            setSelectedItem.call(this);
        }
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
        selectedItem: state.appStateSwitcher.selectedItem,
        menuButtonClickedName: state.appStateSwitcher.menuButtonClickedName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedItem: item => dispatch(setSelectedItem(item)),
        requestHomeworld: hwUrl => dispatch(requestHomeworld(hwUrl)),
        requestNames: (nameType, urls) => dispatch(requestNames(nameType, urls)),
        clearSearchBoxChange: (emptyString) => dispatch(handleSearchBoxChange(emptyString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);