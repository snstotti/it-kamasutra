import React, { useState, useEffect } from 'react'


const ProfileStatus = ({status,getUpdateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [newStatus, setStatus] = useState(status);

    useEffect(()=>{
        setStatus(status)
    }, [status])


    const toggleEditMode = () => {
        setEditMode(!editMode)
        getUpdateStatus(newStatus)
    }

    const setNewStatus = (event) => {
        setStatus(event.target.value)
    }
    
    


   
    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={toggleEditMode}>
                        {status || 'Здесь пока пусто'}
                       
                    </span>
                </div>
                : <div>

                    <input onChange={setNewStatus} autoFocus={true} onBlur={toggleEditMode} value={newStatus} />

                </div>}
        </div>
    )

}

export default ProfileStatus