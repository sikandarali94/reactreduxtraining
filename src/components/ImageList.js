import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    /* We can even write this as:
        return props.images.map((image) => {
            return <img src={image.urls.regular} />
        });
     */
    /* To allow React to render a list of items smartly by analysing the DOM and figuring out what DOM element in the
    list is missing (or needs to add) as the list updates, we need to place a key prop on each of the DOM element in the
    DOM list. To implement this key prop we usually have some data in the array list that can be used as the value for
    the key props (e.g. unique id values in the array list). If we don't have key props in DOM elements of a DOM list,
    React throws an error.
     */
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{ images }</div>;
};

export default ImageList;
