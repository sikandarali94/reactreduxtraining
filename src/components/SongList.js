/* We can have a named export being imported and a default export being imported on a single line. This saves us
writing: "class SongList extends React.Component". */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return <div>SongList</div>
    }
}

export default connect()(SongList);
