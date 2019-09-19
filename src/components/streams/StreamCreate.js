import React from 'react';
/* Field is a React component, while reduxForm is a function. reduxForm has essentially the exact same functionality as
the connect function that is used with the react-redux library. */
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        /* touched property of the meta object tells us if the user has interacted with the form input. It is then a
        good idea to show errors once after a user has started interacting with the particular form input. */
        if (touched && error) {
            /* Semantic UI hides the error message, so therefore, we have to work with Semantic UI to display the error
            message. */
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        /* The first argument is where we get important info and helpers (e.g. onChange) for our form input. The line
        below was shortened from: <input onChange={formProps.input.onChange} value={formProps.input.value}/>. The line
        below is essentially populating the input element with all the properties of input that we destructured. */
        /* The meta property has a property called error that has a string value of the error message we assigned in the
        validate method for that particular form input. */
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit(formValues) {
        /* Because we want are passing the onSubmit method through the handleSubmit method, we don't receive the event
        object but rather receive just the form values e.g. { title: 'form title', description: 'blank' }. Plus, we
        don't have to call event.preventDefault() as Redux form takes care of this for us when we use the handleSubmit
        method. */

    }

    /* We can make Field any kind of input like text, checkbox, number and so forth depending on the props we pass into
    the component. We must pass a component (indicating whether the input field is text, checkbox, number, radio button,
    etc.) prop into Field, otherwise, we will get an error message. */
    /* The label props, because the Field component does not know what to do with it, will get passed onto the
    component returned by the renderInput method. */
    /* Because we are using Redux forms, and the fact that Redux forms provides us with additional component props to
    handle forms, we should handle actions like submission with the methods provided on the props by Redux forms, as
    shown below with the usage of handleSubmit. */
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    /* To tell Redux form that the form is valid, we return an empty object. However, if we want to tell Redux form that
    the form is invalid, we put a key-value pair on the object with the name of the field and the error message. */
    return errors;
};

/* Unlike the connect function which takes separate arguments, reduxForm instead receives a single object where we put
a bunch of configuration into that object. reduxForm hooks up a ton of props into our component like blur, change,
dispatch, invalid, and a whole lot more! */
/* We must provide a name to the form by passing a value to the form key, as shown below. */
/* We rig up our validation method in our reduxForm method, as shown below. Any error messages that we want to display,
the error string populated by the validate method is then passed to the Field component render method (in our case the
renderInput method) that is not valid, as dictated by the property keys (e.g. error.title and error.description in our
case) which correspond to the form input names (name="title" and name="description" in our case)*/
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);
