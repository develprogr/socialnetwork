import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import fetchingReducer from './fetching_reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    fetchingReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

window.store = store;