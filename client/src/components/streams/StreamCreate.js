import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

/* Below is how we can hook up both the connect method and reduxForm method to our component. */
export default connect(null, { createStream })(StreamCreate);