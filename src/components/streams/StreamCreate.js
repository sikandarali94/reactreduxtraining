import React from 'react';
/* Field is a React component, while reduxForm is a function. reduxForm has essentially the exact same functionality as
the connect function that is used with the react-redux library. */
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    render() {
        return (
            <form>
                /* We can make Field any kind of input like text, checkbox, number and so forth depending on the props
                we pass into the component. */
                <Field name="title" />
                <Field name="description" />
            </form>
        );
    }
}

/* Unlike the connect function which takes separate arguments, reduxForm instead receives a single object where we put
a bunch of configuration into that object. reduxForm hooks up a ton of props into our component like blur, change,
dispatch, invalid, and a whole lot more! */
export default reduxForm({
    form: ''
})(StreamCreate);
