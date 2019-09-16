import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
    /* We are required to wire up the Redux form reducer to the 'form' key, as shown below. */
    form: formReducer
});
