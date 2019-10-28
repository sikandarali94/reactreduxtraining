import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    /* With React, normally all components are child of the <div> element with id of 'root'. However, portals allow us
    to get around this restriction and the reason why we use it. Portals allow us to render some element not as a
    direct child, instead we can render that element or that component as a child of some other element (most commonly
    the body element) inside our HTML structure. */
    document.querySelector('#root')
);
