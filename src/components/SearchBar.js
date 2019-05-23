import React from 'react';

class SearchBar extends React.Component {

    /* Every JSX elements has the onClick event.
     */
    /* If we want to execute only a single line of code for an event, it is cleaner to do it with the syntax shown
    below.
     */
    /* The <input> we had before was an uncontrolled element. We want to make the <input> a controlled element.
     */
    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
