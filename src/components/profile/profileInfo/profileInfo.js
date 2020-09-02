import React, { Fragment } from 'react'
// import imgHead from './Cosmos.png'
import s from './profileInfo.module.css'
import Preloader from '../../common/preloaders/preloader'
import ProfileStatusSuper from '../profileStatus/profileStatusSuper'
import ProfileData from '../profileData/profileData'

const ProfileInfo = ({owner,profile, status, getUpdateStatus, saveAvatar}) => {
    // let myAva = 'https://cdn-nus-1.pinme.ru/photo/3d/d5/3dd5a78d8165ca95e6c0425aad7e3d38.jpg'
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

                <ProfileData profile={profile} />
            </div>
        </Fragment>
    )
}

export default ProfileInfo