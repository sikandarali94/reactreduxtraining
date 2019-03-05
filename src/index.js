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
    /* We can reference a number with JSX and even an array (where the values are concatenated into a single string) as
    text. However, we cannot reference an object with JSX as text, but if the object's properties have values that JSX
    can reference as text, then we can reference those object properties with JSX as text.
     */
    const buttonText = {text: 'Click me'};
    /* Where we can reference an object in JSX is if we are not using them to print text but, for example, when we are
    using it as a way to store style properties. We can then reference the object in the style attribute, as shown
    below.
     */
    const style = {backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter name:';
    // const buttonText = 'Click Me!';
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
    /* The HTML we returned below invokes an error in the React application. This means that the below HTML is not valid
    JSX.
     */
    /* These are the differences between JSX and HTML:
    1. The syntax of adding custom styling to an element is different between JSX and HTML:
        HTML: <div style="background-color: red;"></div>
        JSX: <div style={{backgroundColor: 'red'}}></div>
    2. The syntax of adding a class to an element is different between JSX and HTML. Instead of writing class in JSX, we
    write className to add a class to an element. This is because class is a JS keyword, although JS today is smart
    enough to discern the use of class within an element as opposed to a class declaration. This is why we don't get any
    errors when we just write class.
        HTML: <label class="label" for="name">Enter name:</label>
        JSX: <label className="label" for="name">Enter name:</label>
    3. Finally, JSX can reference JS variables while HTML can not (this is the most important feature of JSX). Single
    curly braces ({}) does not indicate that we are referencing a JS object but rather a JS variable, however, we can
    also reference a function using single curly brace ({}).

    Within curly braces ({{}}), the outer curly brace inside JSX indicates that we want to reference a JavaScript
    variable; the inner curly brace is meant to reference a JS object.
     */
    /* By convention, in JSX, we use double quotes for strings and single quotes for any non-JSX property like the value
    of styling properties, as shown below where 'blue' is wrapped in single quotes in the button element. However, this
    is just a convention and some people don't follow it.
     */
    return (
        <div>
            <label className="label" for="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};

// 3. Take the React component and render it on the page.
ReactDOM.render(
    <App />,
    /* The querySelector is referencing the div element whose id is 'root' within the index.html file within the public
    folder.
     */
    document.querySelector('#root')
);
