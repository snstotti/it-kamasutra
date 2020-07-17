import React from 'react'
import s from './profile.module.css'
import imgHead from './Cosmos.png'
import MyPosts from './myPost/myPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__image} src={imgHead} alt='' />
            </div>

            <div className={s.profile}>
                <div className={s.avatar}>
                    <img className={s.avatar__image} src='https://cdn-nus-1.pinme.ru/photo/3d/d5/3dd5a78d8165ca95e6c0425aad7e3d38.jpg' alt='' />
                </div>
                <div className={s.profile__description}>
                    <div>
                        <h2 className={s.profile__name}>Nikola</h2>
                        <div>
                            Description
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile