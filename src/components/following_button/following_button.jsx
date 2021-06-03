import React from 'react';
import s from './following_button.module.css';

const FollowingButton = (props) => {

    const u = props.u;

    return (
        u.followed === false 
            ? <input type='button'
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {props.following(true, u.id)}}
                className={s.btn__follow}
                value='Follow' />
            : <input type='button'
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {props.following(false, u.id)}}
                className={s.btn__follow}
                value='Unfollow' />
        )
};


export {FollowingButton};