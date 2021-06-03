import React, {useEffect, useState} from 'react';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {
        setStatus(props.status);
        props.getMyStatus();

    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateMyStatus(status);
    }
 
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div>
            {
                editMode
                ?   <div>
                        <input
                            onBlur={deactivateEditMode}
                            autoFocus={true} type='text'
                            onChange={onStatusChange}
                            value={status}></input>
                    </div>
                :   <div>   
                        <span onClick={activateEditMode}>
                            {status ? status :<button>Add status</button>}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatus;