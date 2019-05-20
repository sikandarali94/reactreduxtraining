import React from 'react';
import ReactDOM from 'react-dom';

/* The first callback function of getCurrentPosition() is run when the browser successfully receives a response. The
second callback function runs when the browser unsuccessfully receives a response.
 */

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return <div>Hi there!</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
