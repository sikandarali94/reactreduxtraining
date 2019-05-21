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

/* Here are some guidelines associated with using each Component Lifecycle method:
1. constructor: good place to do one-time setup; recommended not to data-loading here even though we can
2. render: avoid doing anything besides returning JSX
3. componentDidMount: good place to do data-loading!
4. componentDidUpdate: good place to do more data-loading when state/props change
5. componentWillUnmount: good place to do cleanup (especially for non-React stuff)
 */

/* Here are other lifecycle methods that are rarely used:
1. shouldComponentUpdate
2. getDerivedStateFromProps
3. getSnapshotBeforeUpdate
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
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
