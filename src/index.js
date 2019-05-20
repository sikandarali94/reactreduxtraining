import React from 'react';
import ReactDOM from 'react-dom';

/* The first callback function of getCurrentPosition() is run when the browser successfully receives a response. The
second callback function runs when the browser unsuccessfully receives a response.
 */
/* With functional components we do not really have any good way of handling async operations like using Geolocation
API with the getCurrentPosition() method.
 */
/* Here are some rules of class components:
1. Must be a JavaScript class.
2. Must extend (subclass) React.Component, which allows us to get a ton of functionality defined in React.Component into
our class.
3. Must define a 'render' method that returns some amount of JSX.
 */
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
