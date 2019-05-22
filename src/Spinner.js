import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

/* It is good to set default values for our props, as shown below, in case we forget to pass some values to our props.
 */
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
