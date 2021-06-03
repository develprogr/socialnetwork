import React from 'react';
import Post from './post/post';
import st from './my_posts.module.css';


const MyPosts = (props) => {

    return (
        <div className={st.myPosts}>
            <div>
                {props.posts.map(p => <Post
                    message={p.message}
                    likes_count={p.likes_count}
                    key={(p.id).toString()}/>)}
            </div>

        </div>
    )
}

export default MyPosts;

