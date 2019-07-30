/* Having all of our reducers in a single file will not scale well in large applications. So we should separate our
reducers in separate file, import them all into this index.js file, and then combine them using the combineReducers
method, as shown below.
 */
import { combineReducers } from "redux";
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer
});
