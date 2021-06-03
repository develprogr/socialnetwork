import React from 'react';
import s from './users_pagination.module.css';

const UsersPagination = (props) => {

    const onPageNumber = (e) => {
        props.setCurrentPage(+e.target.textContent);
    }
    const numberUsersLists = props.numberUsersLists;

    let startPortionsNumber = props.usersPortionNumber * numberUsersLists - (numberUsersLists - 1);
    
    const nextPortion = () => props.setUsersPortionNumber(props.usersPortionNumber + 1);
    
    const previousPortion = () => props.setUsersPortionNumber(props.usersPortionNumber - 1);
    
    const usersPortionsList = () => {
		const array = [];
		for(let i = startPortionsNumber; i <= props.usersPortionNumber * numberUsersLists && i <= props.usersLists; i++) {
			array.push(i);
		};
		return array;
	};

    return (
        <div className={s.usersPages}>
            {props.usersPortionNumber > 1 && <button className={s.pagesButton} onClick={previousPortion}>Prev {numberUsersLists}</button>}
            {
                usersPortionsList().map((p, i) => {
                    return <div 
                        key={i.toString()}
                        onClick={onPageNumber}
                        className={s.pageNumber + ' ' + (props.currentPage === p ?s.pageNumberFocus : '')}><span>{p}</span>
                    </div>
                })
            }
            {props.usersPortionNumber < Math.ceil(props.usersLists / numberUsersLists) && 
        <button className={s.pagesButton} onClick={nextPortion}>Next {numberUsersLists}</button>}
    </div>
    )			
};

export { UsersPagination };