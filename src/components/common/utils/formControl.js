import React from 'react'
import s from './formControl.module.css'

export const CostomForm = type => ({input, meta: {touched, error}, ...props}) =>{
    
    let types = type === 'checkbox' ? s.checkbox : s.inputError

    let hasError = touched && error

    return (
        <div className={s.wrapper}>
            <input {...input} {...props} className={hasError && types} type={type} />
            { hasError && <span className={s.textError}>Required field</span> }
        </div>
    )
}

