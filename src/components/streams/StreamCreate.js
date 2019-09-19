import React from 'react';
/* Field is a React component, while reduxForm is a function. reduxForm has essentially the exact same functionality as
the connect function that is used with the react-redux library. */
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        /* The first argument is where we get important info and helpers (e.g. onChange) for our form input. The line
        below was shortened from: <input onChange={formProps.input.onChange} value={formProps.input.value}/>. The line
        below is essentially populating the input element with all the properties of input that we destructured. */
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} />
            </div>
        );
    }

    /* We can make Field any kind of input like text, checkbox, number and so forth depending on the props we pass into
    the component. We must pass a component (indicating whether the input field is text, checkbox, number, radio button,
    etc.) prop into Field, otherwise, we will get an error message. */
    /* The label props, because the Field component does not know what to do with it, will get passed onto the
    component returned by the renderInput method.
     */
    render() {
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
            </form>
        );
    }
}

/* Unlike the connect function which takes separate arguments, reduxForm instead receives a single object where we put
a bunch of configuration into that object. reduxForm hooks up a ton of props into our component like blur, change,
dispatch, invalid, and a whole lot more! */
/* We must provide a name to the form by passing a value to the form key, as shown below. */
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
