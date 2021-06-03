import React from 'react';
import s from './navbar.module.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={s.menu}>
                <div>
                    <NavLink to="/profile" className={s.a} activeClassName={s.act}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={s.a} activeClassName={s.act}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={s.a} activeClassName={s.act}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/users" className={s.a} activeClassName={s.act}>Users</NavLink>
                </div>


                <div>
                    <NavLink to="/settings" className={s.a} activeClassName={s.act}>Settings</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;