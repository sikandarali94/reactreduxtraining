import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        /* This will log clientHeight as 0. This is because we are console logging this value out before the image had
        a chance to load itself up.
         */
        /* When the image has loaded the 'load' event fires on the img element that we have placed the ref on. */
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    /* React Refs give us access to a single DOM element. We create refs in the constructor assign them to instance
    variables, then pass to a particular JSX element as props.
     */
    render() {
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
