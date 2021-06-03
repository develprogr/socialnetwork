import React, { useEffect } from 'react';
import s from './profile.module.css';
import ava from '../../assets/user/images/ava.jpg';
import { MyPostsContainer } from './my_posts/my_posts_container';
import ProfileStatusContainer from './profile_status/profile_status_container';
import {AddPost} from '../../forms/add_post';
import { Redirect } from 'react-router';


const Profile = (props) => {

    useEffect(() => {
        props.myProfileData();
    }, [props.myProfile && props.myProfile.userID]);


    if (!props.isAuthorized) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <div className={s.main_avatar}>
                <img src={
                    props.myProfile
                        ? props.myProfile.photos.large
                            ? props.myProfile.photos.large
                            : ava
                        : ava
                } alt='' />

                <ProfileStatusContainer
                    status = {props.status}
                    getMyStatus = {props.getMyStatus}       
                    updateMyStatus = {props.updateMyStatus}/>

                <div className={s.my__info}>
                    {props.myProfile
                        ?   <div>
                                <div>
                                    {props.myProfile.fullName
                                        ?   <div className={s.name}>
                                                Name: {props.myProfile.fullName}
                                            </div>
                                        :   ''
                                    }
                                </div>
                                <div>
                                    {props.myProfile.lookingForAJob
                                        ?   <div className={s.job}>
                                                Looking for a job: Yes
                                            </div>
                                        :   <div className={s.job}>
                                                Looking for a job: No
                                            </div>
                                    }
                                </div>
                            </div>
                        : ''
                    }
                </div>
                
                <div className={s.addPost}>
                    <AddPost addPost = {props.addPost}/>
                </div>
                
            </div>
            
            <div className="content">
                <MyPostsContainer />
            </div>

        </div>
        
    )
};


export default Profile;

