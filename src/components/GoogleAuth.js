import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        /* This will just initialize the OAuth library; it's not going to actually take the user through the process.
         */
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '299582126959-ocvh4s9g63bgtaegjlvktgcd46ge9u2e.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
