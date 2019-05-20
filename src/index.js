import React from 'react';
import ReactDOM from 'react-dom';

/* Here are some rules of state in React:
1. Only usable with class components (technically can be used with functional components using the 'hooks' system).
2. 'State' is a JS object that contains data strictly relevant to a component.
3. Updating 'state' on a component causes the component to (almost) instantly rerender.
4. State must be initialized when a component is created.
5. State can ONLY be updated using the function 'setState' (VERY IMPORTANT).
 */
class App extends React.Component {
    /* We can initialize state using the constructor method.
     */
    constructor(props) {
        /* super() is a reference to the parent's (React.Component) constructor method. We need React.Component's
        constructor method to run to set up all the code needed to create a React component, because the constructor
        method in the child class (App) overwrites the constructor method in the parent class. super() should be called
        in the child class constructor method before any other code, as shown below.
         */
        super(props);

        /* Initializing state is the only time we do direct assignment to this.state.
         */
        this.state = { lat: null }; // Initialize state

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    /* The render() method is called many times so it is not a good place to initialize some work or some request like
    we do with calling the getCurrentPosition() method.
     */
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
