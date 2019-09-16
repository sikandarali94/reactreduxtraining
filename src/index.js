/* Redux form automatically creates action creators to handle form input and also does the mapStateToProps wiring for
us. It also creates a reducer for us. In other words, Redux form makes use of the entire Redux system but it does it all
automatically. All we need to do is make sure that the form information is being set on the appropriate input elements
and that the input elements call some callback handler to handle onChange events so that Redux store is updated with the
latest form information. */
/* We can find the Redux form documentation at: www.redux-form.com */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
