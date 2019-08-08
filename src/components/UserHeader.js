/* When we memoize a function, it only gets called once with certain arguments, and if we call the memoized function
again with those same arguments it gives us back just the result of the original function call and doesn't actually
call the function again. e.g.

const memoizedGetUser = _.memoize(getUser); [using lodash's memoize() method]
memoizedGetUser(3) // "Made a request!" [calls the getUser function]
memoizedGetUser(3) // "Made a request!" [returns original result of getUser function call but doesn't call getUser]
memoizedGetUser(2) // "Made a request!" [getUser is called because argument provided to getUser is different]
 */
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return <div className="header">{ user.name }</div>
    }
}

/* In some professional applications some engineers decide to define mapStateToProps and the connect() logic inside of
a separate file. The advantage with this approach is that we will be left with a component that can be used on its own
without having to reach into Redux store by going through the mapStateToProps and the connect() logic. But then we can
easily create a version of that component that will reach into the redux store and get off its own data.
In addition, if we ever have other components that needs to access say one user as we have defined below, by having the
below logic in a separate file, we can reuse the logic in the file in those other components.
 */
/* To get access to the props of the component we pass a second argument called ownProps as shown below.
 */
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
