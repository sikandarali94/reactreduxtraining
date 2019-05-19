/* This file will house the reusable, configurable component that we will use in the React app. Reusable component files
are usually written in upper case (in our case, it is CommonDetail.js).
 */
import React from 'react';

/* So we receive the properties we pass into the component as the props argument. as shown below.
 */
const CommonDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.blogPost}</div>
            </div>
        </div>
    );
};

/* This statement below is what makes CommonDetail available to the rest of our React app.
 */
export default CommonDetail;
