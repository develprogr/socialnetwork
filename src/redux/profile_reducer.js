import { isAuthorizedAPI, profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST',
      MY_DATA = 'MY_DATA',
      UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO',
      SET_STATUS = 'SET_STATUS';

const initialState = {

    myData: null,

    posts: [
        { id: 1, message: 'Hi! It\'s my first post.', likes_count: 25 },
        { id: 2, message: 'Hello. How are you?', likes_count: 5 },
        { id: 3, message: 'How is it going today?', likes_count: 25 },
    ],

    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_PROFILE_PHOTO:
            return {
                ...state,
                myData: {...state.myData, photos: action.photos}
            }

        case MY_DATA:
            return {
                ...state,
                myData: action.myData
            }

        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts, 
                    {
                        id: state.posts.length + 1,
                        message: action.newPostText,
                        likes_count: 0
                    }
                ]
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }

};


export default profileReducer;

export const addPostAC = newPostText => ({type: ADD_POST, newPostText});
const setStatusAC = status => ({type: SET_STATUS, status});
const updateProfilePhotoAC = photos => ({type: UPDATE_PROFILE_PHOTO, photos});


export const updateProfilePhotoTC = photoFile => async dispatch => {
    const response = await profileAPI.updateProfilePhoto(photoFile);
        if (response.data.resultCode === 0) {
            dispatch(updateProfilePhotoAC(response.data.data.photos));
        }
}

export const updateMyStatusTC = status => async dispatch => {
    const response = await profileAPI.updateMyStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status));
        }
}


export const myDataTC = () => async dispatch => {
    const response = await isAuthorizedAPI.me();
    if (response.resultCode === 0) {
        const respo = await usersAPI.setUser(response.data.id);
        dispatch({type: MY_DATA, myData: respo});
    };
};


export const getMyStatusTC = () => async dispatch => {
    const response = await isAuthorizedAPI.me();
    if (response.resultCode === 0) {
        const respo = await profileAPI.getUserStatus(response.data.id)
        dispatch(setStatusAC(respo.data));
    };
};
