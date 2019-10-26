/* URL-based selection (e.g. /streams/delete/:id) is the preferred way of dynamically showing data based on the URL. In
our case, we are going to put the ID (e.g. :id = 17) of the stream being edited in the URL (e.g. /streams/edit/:id =
/streams/edit/17). */
import streams from '../apis/streams';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';
import history from '../history';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    /* We use the push method, as shown below, to route the application to a specific URL. */
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
    /* One thing with PUT requests are that whatever properties we put inside the body of the request are going to
    replace all the properties inside of the record that we're trying to update. If we want to just update some
    properties inside of the record rather than all, we actually use a PATCH request, as shown below. Now some people,
    when designing the backend API or backend servers, disregard the PUT request rule and just merge properties inside
    of the record (just like PATCH request) rather than dropping of the properties that are not inside the body of the
    request. */
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
};