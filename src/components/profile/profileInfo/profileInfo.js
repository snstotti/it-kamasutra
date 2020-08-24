import React, { Fragment } from 'react'
import imgHead from './Cosmos.png'
import s from './profileInfo.module.css'
import Preloader from '../../common/preloaders/preloader'
import ProfileStatusSuper from '../profileStatus/profileStatusSuper'

const ProfileInfo = ({name,profile, status, getUpdateStatus}) => {
    // let myAva = 'https://cdn-nus-1.pinme.ru/photo/3d/d5/3dd5a78d8165ca95e6c0425aad7e3d38.jpg'
    if(!profile){
      return <Preloader />
    }
    
    let anonim = 'https://fetside.com/images/no-image/anonymous.svg'
    let avatarUser = profile.photos.large
    const {facebook, website, vk, twitter, instagram, youtube, github, mainLink} = profile.contacts
    return (
        <Fragment>
            <div>
                <img className={s.content__image} src={imgHead} alt='' />
            </div>

            <div className={s.profile}>
                <div className={s.avatar}>
                    <img className={s.avatar__image} src={avatarUser || anonim} alt='' />
                </div>
                <div>
                    <ProfileStatusSuper status={status} getUpdateStatus={getUpdateStatus} />
                </div>
                <div className={s.profile__description}>
                    <div>
                    <h2 className={s.profile__name}>{profile.fullName}</h2>
                        <div>
                            {profile.aboutMe}
                        </div>
                        <div>
                            <span>
                               Работа: {profile.lookingForAJob ? 'В поиске работы' : 'Работаю в IT' }
                            </span>
                        </div>
                        <div>
                            <span>
                                О себе: {profile.lookingForAJobDescription}
                            </span>
                        </div>
                        <div>
                            Мои контакты:
                            <p> Facebook: {facebook || null}</p>
                            <p> website: {website || 'нет'}</p>
                            <p> vk: {vk || 'нет'}</p>
                            <p> twitter: {twitter || 'нет'}</p>
                            <p> instagram: {instagram || 'нет'}</p>
                            <p> youtube: {youtube || 'нет'}</p>
                            <p> github: {github || 'нет'}</p>
                            <p> mainLink: {mainLink || 'нет'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileInfo