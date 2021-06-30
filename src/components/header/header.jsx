import React from 'react';
import s from './header.module.css';
import logo from './logo.png';
import {NavLink} from 'react-router-dom'; 

class Header extends React.Component {
    

    render() {
        return <header className={s.header}>
            <img className={s.img} src={logo} alt="Logo"></img>
            <div className={s.login}>
                {this.props.authReducer.isAuthorized
                        ?<NavLink to='/login'>
                            {this.props.authReducer.isAuthorized.email}
                            <div>
                                <button onClick={this.props.logout}>Log Out</button>
                            </div>
                        </NavLink>
                    :<NavLink to='/login'>Login</NavLink>}
            </div>
    </header>

    }
}

export default Header;