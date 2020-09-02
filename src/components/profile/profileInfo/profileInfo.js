import React, { Fragment, useState } from 'react'
// import imgHead from './Cosmos.png'
import s from './profileInfo.module.css'
import Preloader from '../../common/preloaders/preloader'
import ProfileStatusSuper from '../profileStatus/profileStatusSuper'
import ProfileData from '../profileData/profileData'
import ProfileDataReduxForm from '../profileData/profileDataForm'


const ProfileInfo = ({owner,profile, status, getUpdateStatus, saveAvatar}) => {

    const [isEdit, setisEdit] = useState(false);

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
        console.log(profile);
    return (
        <Fragment>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <div>
                        <b>{profile.fullName}</b>
                    </div>
                    <div>
                        <ProfileStatusSuper status={status} getUpdateStatus={getUpdateStatus} />
                    </div>
                    <img className={s.avatar__image} src={avatarUser || anonim} alt='' />
                    {owner && <input type='file' onChange={onAvatarChange} />}
                </div>

                {isEdit ? <ProfileDataReduxForm profile={profile} /> : <ProfileData profile={profile} setisEdit={setisEdit}/>}
            </div>
        </Fragment>
    )
}

export default ProfileInfo