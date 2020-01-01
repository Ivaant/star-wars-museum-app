import React from 'react';
//import '../css/ItemCard.css';

const ImageCell = (props) => {

    return (
            <div>
                <img
                    src={props.image}
                    alt={props.name}
                />
                <h1>{props.name}</h1>
            </div>

    )
}

export default ImageCell;