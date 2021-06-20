import MyPosts from "./my_posts";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        avatar: state.profilePage.myData ? state.profilePage.myData.photos.large : null,
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts);
