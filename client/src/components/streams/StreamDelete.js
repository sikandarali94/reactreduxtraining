import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
    /* It's not valid JS syntax to just have two or more elements separate and not contained in a parent element e.g.

        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>

    When the JSX above gets transpiled by Babel, it makes two separate function calls (because button elements are
    separate rather than in a container element) rather than one. Multiple function calls inside a parentheses and then
    passing them to a variable (in our case, the actions variable) is illegal.
     */
    const actions = (
        <div>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </div>
    );

    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};

export default StreamDelete;
