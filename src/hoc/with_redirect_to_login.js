import { Redirect } from 'react-router';
import React from 'react';
import {connect} from 'react-redux';


export const withRedirectToLogin = (Component) => {
    let redirect = (props) => {
        if (!props.isAuthorized) {
            return <Redirect to='/login' />
        }
        return <Component {...props} />
    }
    
    const mapStateToProps = state => ({isAuthorized: state.authReducer.isAuthorized});

    return redirect = connect(mapStateToProps)(redirect);

}