/* To install React Router from npm, we write this command: npm install --save react-router-dom. We must be careful
* not to install react-router. */
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/* The approach of using href tags to navigate in a React app is bad! This is because the href tag makes a request to
the base URL server; the server responds with a new index.html file; the browser then receives the index.html file,
dumps old HTML file it was showing (including all of our React/Redux state data!)*/
/* Using Link is the approach we should use, as shown below. However, interestingly, behind the scenes Link is using
<a></a> tags with href attribute. However the way it is set up is different to a traditional anchor (<a>) tag. When
user clicks a 'Link' tag, React Router prevents the browser from navigating to the new page and fetching new index.html
file; URL still changes; 'History' sees updated URL, takes URL and sends it to BrowserRouter; BrowserRouter communicates
the URL to Route components. */
const PageOne = () => {
    return <div>PageOne
        <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Navigate to Page One</Link>
        </div>
    );
};

/* React has three types of routers available (the only difference is the part of the url that those routers look at):
1. BrowserRouter -> Uses everything after the TLD (.com, .net) or port as the 'path'. This is the most complicated to
deploy inside of any realistic setting because we have to tell the server to always dish the root index.html page if the
URL route does not match with any of the dev resources file (e.g. localhost:3000/favicon.ico). Otherwise, if the server
is not setup like that it will return a 404 error. Some servers do not even allow us to do this setup (like GitHub
pages) -- in that case we should use the HashRouter.
2. HashRouter -> Uses everything after a # as the 'path' [In localhost:3000/#/pagetwo, it looks at only /pagetwo]. Using
this avoids the complicated deployment procedure of the BrowserRouter because servers ignore everything after # and load
everything the URL before the #. Therefore we do not need to configure the server.
3. MemoryRouter -> Doesn't use the URL to track navigation. It navigates but without changing the URL.
 */
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
