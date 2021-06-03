import React from 'react';
import st from './dialog_item.module.css';
import {NavLink} from 'react-router-dom';


const DialogsItem = (props) => {
    return (
        <div className={st.dialogs__item + ' ' + st.act}>
            <img src={props.avatar} alt="Ava" />
            <NavLink to={/dialogs/ + props.id}>{props.user__name}</NavLink>
        </div>

    )
}

export default DialogsItem;