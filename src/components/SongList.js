/* We can have a named export being imported and a default export being imported on a single line. This saves us
writing: "class SongList extends React.Component". */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return <div>SongList</div>
    }
}

/* By convention we call the function below mapStateToProps (although we can call it whatever we like). This tells
connect() what piece/s of state we want to reference from the store. In the example below 'songs' will be a prop of
SongList that references the 'state.songs' property in the store. We also get access to the dispatch method in the
props of SongList.
 */
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
