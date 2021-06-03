import React from 'react';
import st from './settings.module.css';
import { Form, Field } from 'react-final-form'


const Settings = (props) => {

    return (
        <div>
            <div className={st.settings}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpjzjY22TNeREjkUrd-DNQfTfRoD4ki0Weg&usqp=CAU" alt="Settings" />
            </div>
        </div>
    )
};


export default Settings;