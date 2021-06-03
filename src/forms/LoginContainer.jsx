import LoginForm from './login';
import {connect} from 'react-redux';
import { loginTC } from '../redux/auth_reducer';


const mapStateToProps = (state) => {
    return {
        isAuthorized: state.authReducer.isAuthorized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (login, password, rememberMe) => dispatch(loginTC(login, password, rememberMe))
    };
};


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export {LoginContainer};