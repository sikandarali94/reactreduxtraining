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
    /* If we write the reducer like this with promises:
    export const fetchPosts = () => {
        const promise = jsonPlaceholder.get('/posts');
        return { type: 'FETCH_POSTS', payload: response };
    }
    However, this is still a bad approach because by the time our action gets to a reducer we will not have fetched our
    data back, because it takes a fraction of a millisecond for an action to get to a reducer while an API call takes a
    couple of seconds or more. This approach will not throw an error like async/await but the behaviour is not what we
    expect.
     */
    const response = await jsonPlaceholder.get('/posts');

    // Bad approach.
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
