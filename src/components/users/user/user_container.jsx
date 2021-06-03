import User from './user';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { followingThunkCreator, setCurrentUserAC, userFromLocalStorageAC } from '../../../redux/users_reducer';
import { usersAPI } from '../../../api/api';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getUsersOnPage } from '../users_selectors';



const mapStateToProps = state => {
    return {
        followingInProgress: getFollowingInProgress(state),
        currentUser: state.usersPage.currentUser,
        users: state.usersPage.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        following: (follow, userId) => dispatch(followingThunkCreator(follow, userId)),
        userFromLocalStorage: (user) => dispatch(userFromLocalStorageAC(user))
    };
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(User);