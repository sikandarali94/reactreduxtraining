/* The props system only allows us to pass information from the parent component down to a child. However, in this case
we want to pas information from a child component to a parent component.

To pass information from child to parent (App component), in this case, we make the App component a class-based
component where we define a method inside and pass it as a callback function to the SearchBar component.
 */
import React from 'react';

class SearchBar extends React.Component {

    /* Every JSX elements has the onClick event.
     */
    /* If we want to execute only a single line of code for an event, it is cleaner to do it with the syntax shown
    below.
     */
    /* The <input> we had before was an uncontrolled element. We want to make the <input> a controlled element. The
    reason <input> below is now a controlled element is because every time a user inputs a value into the <input>, it
    causes the component to rerender with the user input value because we have saved it in the component state and
    linked it to the value attribute of the <input> element.

    The reason we prefer a controlled element over an uncontrolled element is because with an uncontrolled element we
    can only know its attributes (in our case the value of the input) through the DOM (meaning the source of truth is
    in the DOM), whereas in a controlled element we know the attributes of the element in our React code (meaning the
    source of truth is in React) through the state (in our case the value of the input).

    Controlled elements let us easily perform operations like setting a default value or upper-casing the value of the
    input, as shown below.
     */
    state = { term: 'Hi there!' };

    onFormSubmit = (event) => {
        // Prevents the form or browser from trying to submit.
        event.preventDefault();

        /* Gives us the error -> TypeError: Cannot read property 'state' of undefined. This is because when onFormSubmit
        is invoked, there will be no value of the 'this' keyword. Instead it is invoked as simple onFormSubmit() so the
        'this' keyword inside of the onFormSubmit() method is replaced with undefined.

        To fix this context issue we utilise arrow functions, as shown below.
         */
        this.props.whenUserSubmits(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
