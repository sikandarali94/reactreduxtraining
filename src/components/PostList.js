import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        /* That is why this will log twice. Once as an empty array ([]), the other as the actual posts data.*/
        // console.log(this.props.posts);
        return <div>Post List</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
