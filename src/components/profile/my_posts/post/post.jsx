import React from 'react';
import st from './post.module.css';
import ava from '../../../../assets/user/images/ava.jpg';


const Post = React.memo((props) => {
    return (
        <div className={st.post}>
                <img src={
                    props.userProfile
                        ? props.userProfile.photos.large
                            ? props.userProfile.photos.large
                            : ava
                        : ava
                } alt='' />
            <div>
                {props.message}
            </div>
            <div>
                Колличество лайков: {props.likes_count}
            </div>
        </div>
    )
});


export default Post;


