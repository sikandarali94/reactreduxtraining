/* React-Redux provides two components/tags to interact with the store: Provider and Connect (communicates with the
Provider via the Context system). Provider is instantiated at the highest level of our application (even above the App
component). We wrap components with an instance of the Connect component/tag that want to reference state properties in
the store. We tell the Connect components what pieces of the state in the store to expose as props to the components
they are wrapped around and different Action Creators we want to have wired up as well.
a
 */
import React from 'react';

const App = () => {
    return <div>App</div>;
};

export default App;
