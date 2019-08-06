export default (state, action) => {
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
    return 123;
};
