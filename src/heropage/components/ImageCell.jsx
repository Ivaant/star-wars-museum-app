import React from 'react';

const ImageCell = (props) => {

    return (
        <button className="card" onClick={props.onImageClick}>
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

export default ImageCell;