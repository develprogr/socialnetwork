import React from 'react';
import st from './message.module.css';



const Message = (props) => {

    return (
         <div className={st.message}>{props.message}</div>
    )
};

export default Message;

