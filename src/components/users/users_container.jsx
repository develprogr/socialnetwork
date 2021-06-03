import { connect } from 'react-redux';
import { setCurrentPageAC, getUsersThunkCreator, followingThunkCreator, setUsersPortionNumberAC, getUsersRandomTC, setCurrentUserAC } from '../../redux/users_reducer';
import Users from './users';
import { withRouter } from 'react-router-dom';
import {
    getCurrentPage, getFollowingInProgress, getPagesNumbers, getUsersOnPage, getUsersTotalCount,
    getUsersArray, getUsersLists, getNumberUsersLists, getUsersPortionNumber, getUsersRandom, getRandomUsersCurrentPage
} from './users_selectors';


const mapStateToProps = (state) => {

    return {
        usersArray: getUsersArray(state),
        usersRandom: getUsersRandom(state),
        usersTotalCount: getUsersTotalCount(state),
        usersLists: getUsersLists (state),
        numberUsersLists: getNumberUsersLists (state),
        usersOnPage: getUsersOnPage(state), 
        currentPage: getCurrentPage(state),
        randomUsersCurrentPage: getRandomUsersCurrentPage (state),
        followingInProgress: getFollowingInProgress(state),
        pagesNumbers: getPagesNumbers(state),
        usersPortionNumber: getUsersPortionNumber (state)
    }
}; 

const mapDispatchToProps = (dispatch) => {
    
    return {

        following: (follow, userId) => dispatch(followingThunkCreator(follow, userId)),

        currentUserDispatcher: (currentUser, index) => dispatch(setCurrentUserAC(currentUser, index)),

        setUsersPortionNumber: usersPortionNumber => dispatch(setUsersPortionNumberAC(usersPortionNumber)),

        dispatchUsers: (numberList, count) => dispatch(getUsersThunkCreator(numberList, count)),

        dispatchUsersRandom: count => dispatch(getUsersRandomTC(count)),

        setCurrentPage: currentPage =>  dispatch(setCurrentPageAC(currentPage))
    };
};
   

const userPath = withRouter(Users);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(userPath);

export default UsersContainer;