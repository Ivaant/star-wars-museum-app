import React, { Fragment } from 'react';

const ListCell = (props) => {
    return (
        <Fragment>
            <h1>{props.header}</h1>
            <ul>
                {/* {props.contents.map((elem, index) => {
                    return <li key={index}><button>{elem}</button></li>
                })} */}
            </ul>
        </Fragment>
    );
}

export default ListCell;