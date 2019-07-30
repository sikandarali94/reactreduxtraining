import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    /* It is a bad approach to set an await expression to a variable and then putting that variable directly into the
    payload of an action.
    We get the error:
    'Actions must be plain objects. Use custom middleware for async actions.'
    redux-thunk is middleware that we will use to solve the error above.*/
    const response = await jsonPlaceholder.get('/posts');

    // Bad approach.
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
