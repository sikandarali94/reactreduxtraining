import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommonDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';

/* The general rule for deciding whether to use a Functional component or a Class component is:
    Function components are good for simple content, while Class components are good for just about everything else.
 */
/* Here are a few benefits to using Class components:
    1. Easier code organisation.
    2. Can use 'state' (another React system).
    3. Easier to handle user input.
    4. Understands lifecycle events.
    5. Easier to do things when the app first starts.
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

