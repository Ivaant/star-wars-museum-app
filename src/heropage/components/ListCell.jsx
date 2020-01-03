import React, { Fragment } from 'react';

const ListCell = (props) => {
    const {header, contents} = props;
    return (
        <Fragment>
            <h1>{header}</h1>
            <p>
                {contents !== undefined &&
                contents.map((elem, index) => {
                    return <button key={index}>{elem}</button>
                })}
            </p>
        </Fragment>
    );
}

export default ListCell;