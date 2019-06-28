import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    /* Whenever we expect a state property to eventually contain, say, an object or an array we usually initialize that
    property to be an empty array or an empty object rather than initializing it as null. This is to avoid errors where
    we might use methods/properties like map or length, however, null does not have those methods/properties, but an
    empty array ([]) does.
     */
    state = { images: [] };
    /* It is not the job of React to make a HTTP request, rather we have a separate code/library that handles these
    requests (fetch [built into modern browsers] OR axios [3rd party package]). We will use the Axios library because
    it takes less code to implement it as compared to using Fetch, and it handles edge cases for us.
     */
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID cc780cc1bf95fdb1d4276c7922a565c8bd1ebdaf2ac4d738bec9ee11de126b12'
            }
        });
        // We could use a .then() method to write code that executes after async call is successful. Alternatively we
        // can use async/await which is a lot easier to write.
        // .then(response => {
        //     console.log(response.data.results);
        // });

        /* Below will throw an error because the value of 'this' would be the props property of the SearchBar component
        because we call: this.props.whenUserSubmits(this.state.term) in the SearchBar component. Because
        whenUserSubmits method is called within the context of this.props and thus props of SearchBar component is the
        value of 'this'.
         */
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar whenUserSubmits={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
