/* To install React Router from npm, we write this command: npm install --save react-router-dom. We must be careful
* not to install react-router. */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* The approach of using href tags to navigate in a React app is bad! This is because the href tag makes a request to
the base URL server; the server responds with a new index.html file; the browser then receives the index.html file,
dumps old HTML file it was showing (including all of our React/Redux state data!)*/
const PageOne = () => {
    return <div>PageOne
        <a href="/pagetwo">Navigate to Page Two</a>
    </div>
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <a href="/">Navigate to Page One</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            {/* The Browser Router listens to history (which keeps track of the address bar in the browser) for changes
            to the URL. It then serves up the component registered with the URL path the browser is currently on.
            */}
            <BrowserRouter>
                <div>
                    {/* We use the exact attribute to match the entire URL, rather than as part of the URL. */}
                    {/* If we have routes with same paths all the components registered with those routes will render on
                    the browser page. */}
                    {/* If we remove the exact attribute of the '/' path, it will match everything because '/' is within
                    every route path. */}
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
