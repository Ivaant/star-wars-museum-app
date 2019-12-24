import React from 'react';
import './css/ItemCard.css';

const ItemCard = (props) => {

    return (
        <div className="item-card">
            <img 
            src={props.image}
            alt={props.name}
             />
             <h1>{props.name}</h1>
        </div>
    )
}

export default ItemCard;