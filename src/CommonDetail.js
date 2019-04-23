/* This file will house the reusable, configurable component that we will use in the React app. Reusable component files
are usually written in upper case (in our case, it is CommonDetail.js).
 */
import React from 'react';
import faker from 'faker';

/* So we receive the properties we pass into the component as the props argument. as shown below.
 */
const CommonDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};

/* This statement below is what makes CommonDetail available to the rest of our React app.
 */
export default CommonDetail;
