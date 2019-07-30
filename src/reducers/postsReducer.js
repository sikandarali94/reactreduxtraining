export default () => {
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
    return 123;
};
