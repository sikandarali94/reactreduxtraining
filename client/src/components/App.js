import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    {/* React Router tries to match paths greedily. Meaning, if a given path matches a route, the route
                     will be shown no matter what. React router will not just try to show one route but show every route
                     that matches the given path. In our case the paths '/streams/new' and '/streams/:id' are both
                     matched by React Router when we go to the URL '/streams/new' and thus both components are rendered
                     on top of one another. To fix this issue we use Switch, which shows the component associated with
                     the first matched path, and nothing else. */}
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
