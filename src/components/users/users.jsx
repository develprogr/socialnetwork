import React, { useEffect, useState } from "react";
import s from './users.module.css';
import avatar from './images/ava_empty.jpg';
import { NavLink } from "react-router-dom";
import spinner from './images/spinner.gif';
import { UsersPagination } from "../users_pagination/users_pagination";
import { FollowingButton } from "../following_button/following_button";

const Users = (props) => {

	useEffect(() => {
		props.dispatchUsers(props.currentPage, props.usersOnPage);
		localStorage.setItem('currentPage', props.currentPage);
	}, [props.currentPage]);

	useEffect(() => {
		if (props.currentPage != props.randomUsersCurrentPage) {
			props.dispatchUsersRandom(props.usersOnPage);
		}
	}, [props.usersArray]);

	return (
		<div>
			<UsersPagination {...props} />
			{props.usersArray
				?	props.usersArray.map((u, i) => {
						return (
							<div className={s.user__block} key={`key_${i}`}>
								<div className={s.photo__follow}>
									<NavLink to={'/profile/' + u.id}><img onClick={() => props.currentUserDispatcher(u, i)} className={s.avaBorder} src={
											props.usersRandom.length > 0 ? (props.usersRandom[i].picture.large ? props.usersRandom[i].picture.large : avatar) : avatar
									} alt="Ava" /></NavLink>

									<FollowingButton u={u} {...props} />

								</div>
								<div className={s.info__block}>
									<div className={s.name__location}>
										<div className={s.name}>
											<h4>{props.usersRandom.length > 0 
													? (props.usersRandom[i].name.first ? props.usersRandom[i].name.first : '') + ' ' + 
														(props.usersRandom[i].name.last ? props.usersRandom[i].name.last : '')
													: ''}</h4>
										</div>
										<div className={s.location}>
										{props.usersRandom.length > 0 
											? (props.usersRandom[i].location.country ? props.usersRandom[i].location.country : '') + ' | ' + 
												(props.usersRandom[i].location.city ? props.usersRandom[i].location.city : '') + ' | ' +
												(props.usersRandom[i].location.state ? props.usersRandom[i].location.state : '')
											: ''}
									</div>
									</div>
									<div className={s.status}>
										{/* {u.status ? u.status : 'Статус'} */}
									</div>
								</div>
							</div>
						)
					})
				:	<div className={s.spinner}><img src={spinner} alt='' /></div>
			}
			<UsersPagination {...props} />
		</div>
	)		
};

export default Users;


