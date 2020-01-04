import React, { Fragment } from 'react';

const ListCell = (props) => {
    const {header, contents, poster, onLinkClick} = props;
    return (
        <Fragment>
            <h1>{header}</h1>
            <p>
                {contents !== undefined &&
                contents.map((elem, index) => {
                    return <button onClick={((e) => onLinkClick(header, e.target.textContent))}
                                    key={index}>{elem}</button>
                })}
            </p>
        </Fragment>
    );
}

export default ListCell;