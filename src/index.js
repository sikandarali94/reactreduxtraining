import React from 'react';
import ReactDOM from 'react-dom';
/* We are using the Faker.js library to generate fake images within our app. Faker.js is used to create a lot of fake
data.
 */

/* We should always strive to break down our application into as many components as appropriate. The below method is
a naive way of using components. Later we will use a better method.
 */
/* Here are the steps we should take to create a reusable, configurable component in React:
1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does.
3. Create a new file to house this new component - it should have the same name as the component.
4. Create a new component in the new file, paste the JSX into it.
5. Make the new component configurable by using React's 'props' system.
 */
const App = () => {
    return (
        <div className="ui container comments">
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

