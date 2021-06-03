import React, { useEffect } from 'react';
import s from './user.module.css';
import av from '../../../assets/user/images/ava.jpg';
import { FollowingButton } from '../../following_button/following_button';


const User = (props) => {

    useEffect(() => {
        if (props.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(props.currentUser));
            console.log('localStorage')
        } else {
            props.userFromLocalStorage(JSON.parse(localStorage.getItem('currentUser')));
        }
    }, [props.currentUser]);


    if (props.users.length > 0) {
        localStorage.setItem('users', JSON.stringify(props.users));
    }

    
    return (
        <div className={s.user}>
            {props.currentUser
                ?   <div className={s.avaAndContacts}>
                        <img
                            className={s.ava}
                            src={props.currentUser ? (props.currentUser.picture.large || av) : av }
                            alt=''></img>
                        <h3>{props.currentUser && (props.currentUser.name.first + ' ' + props.currentUser.name.last) }</h3>
                        { props.currentUser.phone && <div><span className={s.contact}>Phone: </span>{props.currentUser.phone} </div> }
                        { props.currentUser.email && <div><span className={s.contact}>Email: </span>{props.currentUser.email} </div> }
                        <div  className={s.followingButton} >   <FollowingButton {...props} u={props.currentUser} /> </div>
                       
                    </div>
                :   <img src ={av} alt='' className={s.ava} /> // Заглушка
            }
            <div className={s.rightBlock}>
                <div> 
                    <div className={s.location}>
                        {props.currentUser && 
                            <div>
                                <span className={s.contact}>Location: </span>
                                {   (props.currentUser.location.country && props.currentUser.location.country)  + ' | ' +
                                    (props.currentUser.location.state && props.currentUser.location.state)  + ' | ' +
                                    (props.currentUser.location.city && props.currentUser.location.city)    }
                            </div>

                        }

                    </div>
                </div>
            </div>
 
        </div>
    ) 
}


export default User;