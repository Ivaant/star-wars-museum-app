import React from 'react';
import '../css/ItemCard.css';

const ItemCard = (props) => {

    return (
        <button className="card" onClick={() => props.onCardClick(props.name)}>
            <div className="item-card">
                <img
                    src={props.image}
                    alt={props.name}
                />
                <h1>{props.name}</h1>
            </div>
        </button>

    )
}

export default ItemCard;