import React from 'react';
import ReactDOM from 'react-dom';
/* We are using the Faker.js library to generate fake images within our app. Faker.js is used to create a lot of fake
data.
 */
import faker from 'faker';

/* We should always strive to break down our application into as many components as appropriate. The below method is
a naive way of using components. Later we will use a better method.
 */
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

