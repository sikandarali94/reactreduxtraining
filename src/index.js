import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/* Because we have named the file that we want to import from actions as index.js we don't need to write the import
statement as: "import actions from '../actions/index.js'" but we can shorten it like we have done below thanks to
webpack.
 */
import actions from '../actions';

ReactDOM.render(<App />, document.querySelector('#root'));
