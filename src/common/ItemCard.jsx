import React from 'react';
import './css/ItemCard.css';

const ItemCard = (props) => {

    return (
        <div className="item-card">
            <img 
            src="https://www.meme-arsenal.com/memes/800f9174d50d5e5153f65a4fd51e8e47.jpg"
            alt="Obi-Wan Kenobi"
             />
             <h1>Obi-Wan Kenobi</h1>
        </div>
    )
}

export default ItemCard;