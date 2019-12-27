import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import './css/CardList.css';

const mapStateToProps = state => {
    return {
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
        return (
            <div className="container" >
                {this.props.data.map((item, index) => {
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