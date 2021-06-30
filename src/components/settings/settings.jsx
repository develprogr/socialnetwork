import React, { useEffect, useState } from 'react';
import st from './settings.module.css';
import { Form, Field } from 'react-final-form'


const Settings = (props) => {

    const [state, setState] = useState();

    useEffect(() => {
        fetch('/api').then(data => data.json()).then(data => setState(data));
    }, [state])


    return (
        <div>
            <div className={st.settings}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpjzjY22TNeREjkUrd-DNQfTfRoD4ki0Weg&usqp=CAU" alt="Settings" />
                <div>Message: {state && state.title}</div>
            </div>
        </div>
    )
};


export default Settings;