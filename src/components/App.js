import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
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

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar whenUserSubmits={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
