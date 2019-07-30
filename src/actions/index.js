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
    /* So for API calls we need to use asynchronous action creators. If we want to have asynchronous action creators
    inside of a Redux application we have to install something called a middleware. This is where redux-thunk comes in.
    With middleware, rather than sending all our actions to a reducer, we send them to all of the different middlewares
    inside of our application.

    These are some important facts about middleware:
    - Function that gets called with every action we dispatch.
    - Has the ability to STOP, MODIFY, or otherwise mess around with actions.
    - Tons of open source middleware exist.
    - Most popular use of middleware is for dealing with async actions.
     */
    /* The changes that redux-thunk makes with our action creators are:
    1. Action creators can return action objects rather than must, because redux-thunk now allows action creators to
    return functions! If we return a function redux-thunk will automatically call that function for us.
    2. redux-thunk checks whether an action creator returns an object or a function. If it returns just an object then
    redux-thunk just passes it to the reducers directly. However, if it returns a function, then redux-thunk calls that
    function with the dispatch and getState method by passing it into the arguments. In the function we can then wait
    for the API request to finish before dispatching the action manually which return an object. When the new dispatched
    action passes through redux-thunk again, redux-thunk will pass it directly to the reducer because it now returns an
    object.
     */
    const response = await jsonPlaceholder.get('/posts');

    // Bad approach.
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
