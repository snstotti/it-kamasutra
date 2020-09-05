import React from 'react'
import s from './profileData.module.css'
import { CostomForm } from '../../common/formControl/formControl'
import { Field, reduxForm } from 'redux-form'

const ProfileDataForm = ({ profile, handleSubmit }) => {

    const CostomFormInput = CostomForm('input')
    const CostomFormCheckbox = CostomForm('checkbox')


    return (
        <form className={s.profile__data} onSubmit={handleSubmit}>
            <div><button type='submit'>Save</button></div>
            <div>
                <b>Full Name : </b> <Field
                    placeholder='Full name'
                    component={CostomFormInput}
                    name='fullName'
                    autoFocus={true} 
                    />
            </div>
            <div>
                <b>Looking for a Job : </b> <Field
                    component={CostomFormCheckbox}
                    name='lookingForAJob' />
            </div>
            <div>
                <b>Looking for a Job : </b> {profile.lookingForAJob ? 'Yes' : 'No'}

            </div>
            {profile.lookingForAJob}
            <div>
                <b>My proffesional skils : </b>
                <Field
                    placeholder='My proffesional skils'
                    component={CostomFormInput}
                    name='lookingForAJobDescription' />
            </div>

            <div>
                <b>About me : </b> <Field
                    placeholder='About me'
                    component={CostomFormInput}
                    name='aboutMe' />
            </div>

            <div>
                <b>Contacts : </b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contacts}>{key}: <Field
                        placeholder={key}
                        component={CostomFormInput}
                        name={`contacts.${key}`} /></div>
                })}
            </div>

        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm