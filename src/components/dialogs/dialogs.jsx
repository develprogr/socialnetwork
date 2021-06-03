import React from 'react';
import { AddDialogForm } from '../../forms/add_dialog';
import st from './dialogs.module.css';
import DialogsItem from './dialog_item/dialog_item';
import Message from './message/message'

const Dialogs = (props) => {
    
    const dialogsElements = props.dialogsElements.map(d => <DialogsItem
        user__name={d.name}
        avatar={d.avatar}
        id={d.id}
        key={d.id.toString()}
    />),

    messagesElements = props.messagesElements.map((m) => <Message
        message={m.message}
        id={m.id}
        key={m.id.toString()}
    />); 


    return (
        <div className={st.dialogs}>
            <div className={st.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messagesElements}
                <AddDialogForm addMessage={props.addMessage} />
            </div>
        </div>
    )
};

export default Dialogs;