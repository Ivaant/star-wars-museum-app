import React, { Component } from 'react';
import ItemCard from '../common/components/ItemCard';
import { connect } from 'react-redux';
import './css/CardList.css';

const mapStateToProps = state => {
    return {
        searchBoxInput: state.appStateSwitcher.searchBoxInput,
        itemsToRender: state.appStateSwitcher.itemsToRender,
        itemsList: state.requestItemsList.itemsList
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}


class CardList extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.itemsList !== prevProps.itemsList) {
            const currentItemsList = this.props.itemsList;
            console.log(currentItemsList);
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
                        />
                    );
                })
                }
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);