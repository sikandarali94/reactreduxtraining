import React from 'react';

class SearchBar extends React.Component {

    /* Every JSX elements has the onClick event.
     */
    /* If we want to execute only a single line of code for an event, it is cleaner to do it with the syntax shown
    below.
     */
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                    <input
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
