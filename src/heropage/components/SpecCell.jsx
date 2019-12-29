import React, { Fragment } from 'react';

const SpecCell = ({ contents }) => {
    return (
        <Fragment>
            <h1>Specification</h1>
            <p>{contents.height}</p>
            <p>{contents.mass}</p>
            <p>{contents.hair_color}</p>
            <p>{contents.skin_color}</p>
            <p>{contents.eye_color}</p>
            <p>{contents.birth_year}</p>
            <p>{contents.gender}</p>
        </Fragment>
    );
}

export default SpecCell;