import React from 'react';

const ImageList = (props) => {
    /* We can even write this as:
        return props.images.map((image) => {
            return <img src={image.urls.regular} />
        });
     */
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} />
    });

    return <div>{ images }</div>;
};

export default ImageList;
