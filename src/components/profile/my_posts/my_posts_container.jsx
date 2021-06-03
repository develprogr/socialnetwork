import MyPosts from "./my_posts";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        avatar: state,
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts);
