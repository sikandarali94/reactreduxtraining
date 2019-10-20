import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        { stream.title }
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        /* Using the Link component to navigate the application is known as 'Intentional Navigation' where a user clicks
        on a 'Link' component. The other type of navigation is known as 'Programmatic Navigation' where we (developer)
        run code to forcibly navigate the user through our app. */
        /* This is how React Router implements routing: the Browser Router (which sits at the very top of our component
        hierarchy) creates a history object (more accurately known as a browser history object, meaning that it only
        looks at the URL (e.g /streams or /streams/new) after the base url (e.g. localhost:3000 or sikandarali.me)).
        This history object keeps track of the address bar in our browser but also has the ability to change the
        address bar as well. The Browser Router listens to the history object for changes to the 'URL' and thus knows
        which component to render depending upon the current url. So, using the history object, we can implement
        programmatic navigation in our application. However, because the Browser Router creates the history object, it
        is challenging to write code to get a handle or reference to that history object. One way to get the history
        object into our action creator we can first get a reference to the history object within a component and then
        pass that reference to the appropriate action creator. However, this is not an ideal solution because we have
        not control over the history object as it is maintained by the browser router. So what we can do is,
        essentially, create a history object inside of a dedicated file inside of our project using a generic router
        (a router other than the browser router, hash router or the memory router). Then, any time that we want to get
        access to that history object, we can just import that file. This allows us to maintain control over the history
        object. */
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
