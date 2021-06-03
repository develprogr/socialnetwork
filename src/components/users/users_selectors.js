import { createSelector } from 'reselect';

// const usersArraySelector = state => state.usersPage.users;

// export const usersArrayReselect = createSelector(usersArraySelector, (users) => {
//     return users.filter(user => true);
// });

export const getPagesNumbers = state => state.usersPage.pagesNumbers,

    getUsersArray = state => state.usersPage.users,

    getUsersRandom = state => state.usersPage.usersRandom,

    getUsersTotalCount = state => state.usersPage.usersTotalCount,

    getUsersLists = state => Math.ceil(state.usersPage.usersTotalCount / state.usersPage.usersOnPage),

    getNumberUsersLists = state => state.usersPage.numberUsersLists,

    getUsersOnPage = state => state.usersPage.usersOnPage,

    getCurrentPage = state => state.usersPage.currentPage,
 
    getRandomUsersCurrentPage = state => state.usersPage.randomUsersCurrentPage,

    getUsersPortionNumber = state => state.usersPage.usersPortionNumber, 

    getFollowingInProgress = state => state.usersPage.followingInProgress;
