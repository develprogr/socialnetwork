import { connect } from 'react-redux';
import Header from './header';
import { logoutTC } from '../../redux/auth_reducer';


const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutTC())
    } 
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;