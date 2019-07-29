import React from 'react';
import { connect } from 'react-redux';

/* connect does not only work with class-based components but also work with functional-based components, as shown
below.
 */
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: { song.title }
                <br />
                Duration: { song.duration }
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
