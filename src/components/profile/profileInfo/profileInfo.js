import React, { Fragment } from 'react'
import imgHead from './Cosmos.png'
import s from './profileInfo.module.css'
import Preloader from '../../common/preloaders/preloader'

const ProfileInfo = ({name,profile}) => {
    // let myAva = 'https://cdn-nus-1.pinme.ru/photo/3d/d5/3dd5a78d8165ca95e6c0425aad7e3d38.jpg'
    if(!profile){
      return <Preloader />
    }
    
    return (
        <Fragment>
            <div>
                <img className={s.content__image} src={imgHead} alt='' />
            </div>

            <div className={s.profile}>
                <div className={s.avatar}>
                    <img className={s.avatar__image} src={profile.photos.large} alt='' />
                </div>
                <div className={s.profile__description}>
                    <div>
                    <h2 className={s.profile__name}>{name}</h2>
                        <div>
                            Description
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileInfo