import React from 'react';
import { connect } from 'react-redux';

/* connect does not only work with class-based components but also work with functional-based components, as shown
below.
 */
const SongDetail = props => {
    console.log(props);
    return <div>Song Detail</div>;
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
