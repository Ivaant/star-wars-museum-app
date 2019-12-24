import React from 'react';
import ItemCard from './ItemCard';
import './css/CardList.css';

const CardList = (props) => {
    return (
        <div className="container" >
            {props.data.map((item, index) => {
                return (
                    <ItemCard
                        key={index}
                        image={item.url}
                        name={item.name}
                    />
                );
            })
            }
        </div>
    )
}

export default CardList;