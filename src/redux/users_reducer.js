import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'my-app/SET_USERS',
    SET_USERS_RANDOM = 'SET_USERS_RANDOM',
    SET_CURRENT_USER = 'my-app/SET_CURRENT_USER',
    USERS_PAGES_NUMBER = 'USERS_PAGES_NUMBER',
    SET_CURRETN_PAGE = 'SET_CURRETN_PAGE',
    SET_USERS_PORTION_NUMBER = 'SET_USERS_PORTION_NUMBER',
    USER_FROM_LOCAL_STORAGE = 'USER_FROM_LOCAL_STORAGE',
    FOLLOWING = 'FOLLOWING';


const initialState = {
    users: [],
    usersRandom: [],
    currentUser: null,
    usersOnPage: 10,
    numberUsersLists: 10,
    usersPortionNumber: 1,
    currentPage: 1,
    randomUsersCurrentPage: 0,
    followingInProgress: [],
    usersTotalCount: 0
}



const usersReducer = (state = initialState, action) => {

    
    const following = isFollowed => {
        return {
            ...state,
            currentUser: {...state.currentUser, followed: isFollowed},
            users: state.users.map((u, i ) => {
            if (u.id === action.id) {
                const uForFollow = state.users[i];
                uForFollow.followed = isFollowed;
                uForFollow.key =  i.toString();
                return uForFollow;
            } else {
                return u;
            }
        })}
    };

    switch (action.type) {

        case FOLLOW:
            return following(true);
            
        case UNFOLLOW:
            return following(false);

        case USER_FROM_LOCAL_STORAGE:
            return {
                ...state,
                currentUser: action.user
            }

        case SET_USERS_PORTION_NUMBER:
            return {
                ...state,
                usersPortionNumber: action.usersPortionNumber
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users ?[...action.users] : [],
                currentUser: null,
                usersTotalCount: action.usersTotalCount
        }

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: {
                    ...action.currentUser,
                    email: state.usersRandom[action.index].email,
                    location: state.usersRandom[action.index].location,
                    name: state.usersRandom[action.index].name,
                    phone: state.usersRandom[action.index].phone,
                    picture: state.usersRandom[action.index].picture

                }
            }



        case SET_USERS_RANDOM:
            return {
                ...state,
                usersRandom: action.usersRandom ?[...action.usersRandom] : [],
                randomUsersCurrentPage: state.currentPage
        }


        case SET_CURRETN_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
        }

        case FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetchFollowing
                                        ? [...state.followingInProgress, action.userId]
                                        : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
};

export default usersReducer;

export const followAC = id => ({ type: FOLLOW, id: id });
export const unfollowAC = id => ({ type: UNFOLLOW, id: id });
export const setUsersAC = (users, usersTotalCount) => ({ type: SET_USERS, users,  usersTotalCount});
export const setCurrentUserAC = (currentUser, index) => ({ type: SET_CURRENT_USER, currentUser, index});
export const usersPagesNumberAC = number => ({ type: USERS_PAGES_NUMBER, users: number });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRETN_PAGE, currentPage });
export const setUsersPortionNumberAC = usersPortionNumber => ({type: SET_USERS_PORTION_NUMBER, usersPortionNumber});
export const userFromLocalStorageAC = user => ({type: USER_FROM_LOCAL_STORAGE, user});


const setUsersRandomAC = usersRandom => ({ type: SET_USERS_RANDOM, usersRandom});

const followingProgressAC = (isFetchFollowing, userId) => ({ type: FOLLOWING, isFetchFollowing, userId });


/*   Thunk - Функция которая диспатчит внутри себя обычные экшины
============================================ */

export const getUsersThunkCreator = (numberList, count) => {
    return dispatch => {
        usersAPI.getUsers(numberList, count).then(data => dispatch(setUsersAC(data.items, data.totalCount)));
    };
};



export const getUsersRandomTC = count => dispatch => {
    fetch(`https://randomuser.me/api/?results=${count}`).then(response => {
        if (response.ok) {
            return response.json();
        };
    })
    .then(data => dispatch(setUsersRandomAC(data.results)))
    .catch(error => console.error(error));
    
};



export const followingThunkCreator = (follow, userId) => {
    return dispatch => {
        dispatch(followingProgressAC(true, userId));
            follow
                ? usersAPI.followUser(userId)
                    .then(data => {
                        if (data.resultCode === 0) {
                            dispatch(followAC(userId));
                        }
                        dispatch(followingProgressAC(false, userId));
                    })
                : usersAPI.unFollowUser(userId)
                    .then(data => {
                        if (data.resultCode === 0) {
                            dispatch(unfollowAC(userId));
                        }
                        dispatch(followingProgressAC(false, userId));
                    });
    }
};