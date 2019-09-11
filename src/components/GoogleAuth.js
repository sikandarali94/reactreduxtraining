import React from 'react';

class GoogleAuth extends React.Component {
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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
