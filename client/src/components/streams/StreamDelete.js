import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    /* It's not valid JS syntax to just have two or more elements separate and not contained in a parent element e.g.

        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>

    When the JSX above gets transpiled by Babel, it makes two separate function calls (because button elements are
    separate rather than in a container element) rather than one. Multiple function calls inside a parentheses and then
    passing them to a variable (in our case, the actions variable) is illegal.
     */
    /* A React Fragment is essentially a JSX looking element that is going to allow us to return multiple elements or
    assign multiple elements to a single variable. However, when it gets rendered on the screen it doesn't produce any
    HTML. In other words, a React Fragment is like an invisible element that doesn't have any impact on the DOM
    whatsoever. This is good because we want two button to be rendered adjacently next to each other but not to be
    wrapped in a div element as it throws the Semantic UI styling off. In the case below, the React.Fragment element
    will not render on the screen, only the two buttons inside it will render. We can also shorten React.Fragment to
    this: <></> e.g.
        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>
    However, it is a good idea to use <React.Fragment></React.Fragment> as there are some linters out there that see
    empty tags (<></>) as invalid syntax. */
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);
