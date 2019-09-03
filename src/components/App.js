/* To install React Router from npm, we write this command: npm install --save react-router-dom. We must be careful
* not to install react-router. */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click Me!</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* We use the exact attribute to match the entire URL, rather than as part of the URL. */}
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
