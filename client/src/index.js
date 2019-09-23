/* We first should separate our json-server code from our client code. Then in the directory where we want to write the
server code, we should initialize npm [npm init] and then install json-server using npm (npm install --save
json-server).

We can set up script commands in the package.json file in the scripts property e.g.
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server -p 3001 -w db.json" // This script will run when we write the command: npm start, because we
    have defined the script under the "start" key.
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.15.1"
  }
}
 */
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
