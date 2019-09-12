import React from 'react';

class GoogleAuth extends React.Component {
    /* Right now only the GoogleAuth component knows whether we have signed in or signed out. This is inconvenient
    because we want this information to be centralised so that any component that needs this information can access it.
    That is why we will use the Redux store to store this information.
     */
    state = { isSignedIn: null };

    componentDidMount() {
        /* This will just initialize the OAuth library; it's not going to actually take the user through the process. */
        /* For full documentation of the GAPI library, we can visit:
        developers.google.com/api-client-library/javascript/reference/referencedocs */
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '299582126959-ocvh4s9g63bgtaegjlvktgcd46ge9u2e.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
