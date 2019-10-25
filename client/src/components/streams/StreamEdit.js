import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return <div>{this.props.stream.title}</div>;
    }
}

/* mapStateToProps can be called with two arguments. The second argument gets passed all the props of the component
connected to the mapStateToProps method (in our case, the props passed to StreamEdit gets passed down into the ownProps
argument of the mapStateToProps method). */
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
