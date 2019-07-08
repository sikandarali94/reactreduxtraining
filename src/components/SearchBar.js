import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'blahblah' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        // Below prevents the page from refreshing when user submits the form.
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                               onChange={this.onInputChange}
                               value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
