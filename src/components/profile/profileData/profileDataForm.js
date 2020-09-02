import React from 'react'
import s from './profileData.module.css'
import { CostomForm } from '../../common/formControl/formControl'
import { Field, reduxForm } from 'redux-form'

const ProfileDataForm = ({ profile }) => {
    
    const CostomFormInput = CostomForm('input') 

    return (
        <form className={s.profile__data} onSubmit={()=>{}}>
            <button>Save</button>
            <div>
                <b>Looking for a Job : </b> {profile.lookingForAJob ? 'Yes' : 'No'}

            </div>
            {profile.lookingForAJob }
                <div>
                    <b>My proffesional skils : </b>
                    <Field
                        placeholder='My proffesional skils'
                        component={CostomFormInput}
                        name='lookingForAJobDescription' />
                </div>

            <div>
                <b>About me : </b> {profile.aboutMe}
            </div>

            <div>
                <b>Contacts : </b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contacts}>{key}: {profile.contacts[key]}</div>
                })}
            </div>

        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm)

export default ProfileDataReduxForm