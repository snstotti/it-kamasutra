import React, { Fragment, useState } from 'react'
// import imgHead from './Cosmos.png'
import s from './profileInfo.module.css'
import Preloader from '../../common/preloaders/preloader'
import ProfileStatusSuper from '../profileStatus/profileStatusSuper'
import ProfileData from '../profileData/profileData'
import ProfileDataReduxForm from '../profileData/profileDataForm'


const ProfileInfo = ({owner,profile, status, getUpdateStatus, saveAvatar, saveProfile}) => {

    const [isEdit, setisEdit] = useState(false);
    

   

    const onSubmit = values => {
        
        saveProfile(values)
        .then(()=>setisEdit(false))
        
      }

    if(!profile){
      return <Preloader />
    }
    
    let onAvatarChange=(e)=>{
        if(e.target.files.length){
            saveAvatar(e.target.files[0])
        }
    }

    let anonim = 'https://fetside.com/images/no-image/anonymous.svg'
    let avatarUser = profile.photos.large
        
    return (
        <Fragment>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <div>
                        <ProfileStatusSuper status={status} getUpdateStatus={getUpdateStatus} />
                    </div>
                    <img className={s.avatar__image} src={avatarUser || anonim} alt='' />
                    {owner && <input type='file' onChange={onAvatarChange} />}
                </div>

                {isEdit 
                ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> 
                : <ProfileData owner={owner} profile={profile} setisEdit={()=>setisEdit(true)}/>}
            </div>
        </Fragment>
    )
}

export default ProfileInfo