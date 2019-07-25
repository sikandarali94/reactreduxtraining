/* We can have a named export being imported and a default export being imported on a single line. This saves us
writing: "class SongList extends React.Component". */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    /* When we call this.props.selectSong(), because we put selectSong() in the connect method, Redux then executes
    selectSong() within the dispatch() method without us having to.
     */
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

/* By convention we call the function below mapStateToProps (although we can call it whatever we like). This tells
connect() what piece/s of state we want to reference from the store. In the example below 'songs' will be a prop of
SongList that references the 'state.songs' property in the store. We also get access to the dispatch method in the
props of SongList.
 */
const mapStateToProps = state => {
    return { songs: state.songs };
};

/* The connect method is where we provide the list of action creators we want to call from the component it is in.
 */
export default connect(mapStateToProps, { selectSong })(SongList);
