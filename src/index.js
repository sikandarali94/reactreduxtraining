// To show something to the page using React, we should follow these steps:

// 1. Import the React and ReactDOM libraries. We are using the bundler Webpack to import the libraries.
import React from 'react';
/* In NodeJS, typically we use require statement rather than the import statement like this:
const React = require('react);
The import statement uses ES2015 modules system to grab code from other packages while the require statement uses
CommonJS modules system.
 */
import ReactDOM from 'react-dom';

// 2. Create a React component.
/* A React component is a function or class that produces HTML to shows the user (using JSX) and handles feedback from
the user (using event handlers).
 */
/* With Babel, the
 */
const App = () => {
    /* While JSX looks like HTML, it is actually not. Babel converts the return statement below to:
    return React.createElement(
        "div",
        null,
        "Hi there!"
    );
    Therefore JSX is just a convenient way of creating an element in React. At the end of the day, JSX is converted
    to a React.createElement() function call. JSX helps us write complicated HTML elements easily rather than tediously
    mapping out React.createElement() function calls.
     */
    return <div>Hi there!</div>; // Returns JSX
};

// 3. Take the React component and render it on the page.
ReactDOM.render(
    <App />,
    /* The querySelector is referencing the div element whose id is 'root' within the index.html file within the public
    folder.
     */
    document.querySelector('#root')
);
