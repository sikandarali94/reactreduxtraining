export default (state = [], action) => {
    /* A reducer can never ever return undefined during initialization. It must always return a value besides undefined,
    as shown below.
     */
    /* We should always set an initial value of the arguments passed into a reducer. e.g.
    const selectedSongReducer = (selectedSong = null, action) => {};
     */
    /* Here are some rules for reducers:
    1. Must return any value besides 'undefined'.
    2. Produces 'state', or data to be used inside of our app using only previous state and the action.
    3. Must not reach 'out of itself' (e.g. api request) to decide what value to return (reducers are pure).
    4. Must not mutate its input 'state' argument.
     */
    /* The rule that we must not mutate the reducer's input 'state' argument is extremely misleading, and possibly even
    false. The reality is we can mutate the 'state' argument all day and not see any errors! However, best practice is
    not to mutate the 'state' argument. However, if we do mutate the state, the way Redux is rigged up, is that Redux
    will not notify our application that the state has changed. So, therefore, it is not because we cannot mutate the
    'state' argument, it is because we shouldn't.

    On top of that, we should not return the 'state' argument even if we have not made changes to it.
     */

    /* Here are good ways/examples to do state updates in reducers that does not mutate 'state'

    Removing an element from an array:
    newState = state.filter(element => element !== 'hi')

    Adding an element to an array:
    newState = [...state, 'hi']

    Replacing an element in an array:
    newState = state.map(el => el === 'hi' ? 'bye' : el)

    Updating a property in an object:
    newState = { ...state, name: 'Sam' }

    Adding a property to an object:
    newState = { ...state, age: 30 }

    Removing a property from an object:
    newState = { ...state, age: undefined } (OR using lodash's _.omit() method because it is not recommended to do this
    as it still leaves the key inside the object but just assigns it a value of undefined. True removal is done using
    lodash's _.omit() method)
     */
    /* When our application loads up inside the browser, all of our reducers run one time with an action of some
    initialization type. That action will not match any of the defined actions in our reducers, thus returning just
    'state'. This is gonna cause the render method to be called.
     */
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
