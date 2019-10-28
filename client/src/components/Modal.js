import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    /* We use ReactDOM.createPortal() to create a portal. The first argument is the JSX content we want to render; the
    second argument is reference to the element we want to render in. Even though we want to render the modal as a child
    of the body element, if we were to give the body element as a reference, React will replace the content of the body
    element with the modal content as structured below. Instead we created a div element as a child of body in
    index.html and passed that as the reference, as shown below. Therefore, the modal content will populate into the div
    element that we gave reference to (document.querySelector('#modal')).
    Apart from using portals to create a modal, there is another common scenario where we would use a portal: if we're
    trying to introduce React into a server-side rendered application, maybe like a Java application that renders HTML
    on the back-end or maybe Ruby on Rails application or Django or something like that. */
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;