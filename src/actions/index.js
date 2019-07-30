import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    /* It is a bad approach to set an await expression to a variable and then putting that variable directly into the
    payload of an action.
    We get the error:
    'Actions must be plain objects. Use custom middleware for async actions.'
    redux-thunk is middleware that we will use to solve the error above.*/
    /* Here are the two reasons we get the error above:
    1. Action creators must return plain JS objects with a type property - we are not. Because we are using async/await
    syntax which causes fetchPosts to return "jsonPlaceholder.get('/posts')" rather than "{type: 'FETCH_POSTS', payload:
    response }" when data has not been fetched from the API.
    2. By the time our action gets to a reducer, we won't have fetched our data!
     */
    const response = await jsonPlaceholder.get('/posts');

    // Bad approach.
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
