import React from 'react'
import s from './profileData.module.css'

const ProfileData = ({ profile, setisEdit, owner }) => {
    return (
        <div className={s.profile__data}>
            {owner && <button onClick={setisEdit}>Edit</button>}
            <div>
                <b>Full name : </b>{profile.fullName}
            </div>
            <div>
                <b>Looking for a Job : </b> {profile.lookingForAJob ? 'Yes' : 'No'}

            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My proffesional skils : </b> {profile.lookingForAJobDescription}
                </div>}

            <div>
                <b>About me : </b> {profile.aboutMe}
            </div>

            <div>
                <b>Contacts : </b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contacts}>{key}: {profile.contacts[key]}</div>
                })}
            </div>

        </div>
    )
}

export default ProfileData