import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    /* It is not the job of React to make a HTTP request, rather we have a separate code/library that handles these
    requests (fetch [built into modern browsers] OR axios [3rd party package]). We will use the Axios library because
    it takes less code to implement it as compared to using Fetch, and it handles edge cases for us.
     */
    onSearchSubmit(term) {

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
