import React, { Fragment } from 'react';
import ImageCell from './ImageCell';

const ListCell = (props) => {
    const { header, contents, poster, onLinkClick } = props;
    return (
        <Fragment>
            <h1>{header}</h1>
            {poster == null ?
                <p>
                    {contents !== undefined &&
                        contents.map((elem, index) => {
                            return <button onClick={((e) => onLinkClick(header, e.target.textContent))}
                                key={index}>{elem}</button>
                        })}
                </p>
                :
                <ImageCell
                    image={poster.linkUrl}
                    name={poster.linkName}
                />
            }
        </Fragment>
    );
}

export default ListCell;