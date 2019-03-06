import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
    const buttonText = {text: 'Click me'};
    const style = {backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter name:';
    /* These are the three tenets of components:
    1. A component can be shown inside of another (component nesting).
    2. We want to make components that can be easily reused through out our application (component reusability).
    3. We should be able to configure a component when it is created (component configuration).
     */
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
