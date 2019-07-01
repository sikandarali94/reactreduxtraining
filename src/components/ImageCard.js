import React from 'react';

class ImageCard extends React.Component {
    /* React Refs give us access to a single DOM element. We create refs in the constructor assign them to instance
    variables, then pass to a particular JSX element as props.
     */
    render() {
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
