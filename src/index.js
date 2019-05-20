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
