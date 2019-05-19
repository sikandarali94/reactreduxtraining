import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
/* Here we don't need to put the .js endpoint to CommonDetail because JS will automatically look for .js files in the
director we point it to.
 */
import CommonDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';
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
/* The Props system is used for passing data from a parent component to a child component. The goal is to customize or
configure a child component. With the Props (properties) system, a child component cannot pass data to a parent
component directly.
 */

/* Below, the CommonDetail component is a child of the ApprovalCard component. Also, we would call the CommonDetail
component a prop of ApprovalCard because we are providing some configuration to the ApprovalCard component.
 */
/* Within a React component, we don't have to pass a React component for it to be inside the children property of the
props object. We can even pass text like OR even plain JSX.
 */
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    blogPost="Hello there people."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    avatar={faker.image.avatar()}
                    author="Alex"
                    timeAgo="Today at 5:45PM"
                    blogPost="Bye guys. Have fun."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    avatar={faker.image.avatar()}
                    author="Jane"
                    timeAgo="Yesterday at 6:45PM"
                    blogPost="Feeling sad, despite my profile pic."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

