import React from 'react';
import ReactDOM from 'react-dom';

/* The other way to initialize state is using the lifecycle methods.
 */
/* Here is a general overview of a Component Lifecycle in order of time:
1. constructor()
2. render() -> content is visible on screen
3. componentDidMount (runs once when component is rendered on screen) -> sit and wait for updates...
4. componentDidUpdate (called when component updates itself) -> sit and wait until this component is no longer shown
5. componentWillUnmount (called when component is no longer shown)
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component has just updated - it rerendered!');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
