import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        console.log(formValues);
    };

    /* We are technically not passing props into StreamForm but rather passing props to Redux Form (Redux then turns
    around and passes those props into our component). Therefore, we can actually pass some special props to Redux Form,
    and one of them is called initialValues. When we pass initialValues prop into a Redux Form wrapped component, it
    provides some initial values to show inside of the inputs within the Redux Form wrapped component. When passing a
    value to initialValues, we use the form input names (in our case: title and description) to set the initial input
    values e.g. initialValues={{ title: 'EDIT ME', description: 'CHANGE ME TOO' }}. */
    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

/* mapStateToProps can be called with two arguments. The second argument gets passed all the props of the component
connected to the mapStateToProps method (in our case, the props passed to StreamEdit gets passed down into the ownProps
argument of the mapStateToProps method). */
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
