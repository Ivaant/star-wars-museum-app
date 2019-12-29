import React, { Fragment } from 'react';

const ListCell = (props) => {
    return (
        <Fragment>
            <h1>Header</h1>
            <ul>
                <button><li>First item</li></button>
                <button><li>Second item</li></button>
            </ul>
        </Fragment>
    );
}

export default ListCell;