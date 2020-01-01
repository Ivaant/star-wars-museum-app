import React, { Fragment } from 'react';

const SpecCell = ({ contents }) => {

    return (
        <Fragment>
            <h1>Specification</h1>
            {
                Object.keys(contents)
                .slice(1, 8)
                .map((key, index) => { return <p key={index}>{key} : {contents[key]}</p> })
            }
        </Fragment>
    );
}

export default SpecCell;