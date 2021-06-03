import { isAuthorizedAPI } from "../api/api";
import {stopSubmit} from 'redux-form';                         // Специальнй экшнкриейтор сделан разработчиками

const AUTHORIZE = 'AUTHORIZE';

const initialState = {
    isAuthorized: false
}
 

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHORIZE:
            return {
                ...state,
                isAuthorized: action.isAuthorized
            }
        
        default: return state;
    }

}

const authorizeAC = (authData) => ({type: AUTHORIZE, isAuthorized: authData});

export default authReducer;


export const isAuthorizedMeTC = () => (dispatch) => {

    return isAuthorizedAPI.me().then(response => {
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(authorizeAC({id, login, email})); 
        };
    }); 
};


export const loginTC = (email, password, rememberMe) => (dispatch) => {
    isAuthorizedAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(isAuthorizedMeTC());
            } else {
                const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { _error: message }));   // Имя формы - reduxForm({form: 'login'})(LoginForm)
            }
        });
};

export const logoutTC = () => (dispatch) => {
    return isAuthorizedAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(authorizeAC(false));
            }
        });
};