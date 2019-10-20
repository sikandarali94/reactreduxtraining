import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    /* If we pass history as a prop, the BrowserRouter will attempt to use the provided history object instead of its
    own default history object. However, by the end, the BrowserRouter will give us a warning saying that it will
    ignore the history object we passed to it and use its own default history object. To fix this error we should use
    a plain Router rather than BrowserRouter and pass the history object as a prop to it. Changing from BrowserRouter
    to a plain Router does not mess up the routing in anyway; the only difference is that we are in control of the
    history object as opposed to React. */
    /* When we write ':' and then any name e.g. ':id' in the URL path, the react router will understand that to be a
    URL param. */
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    );
};

export default App;
