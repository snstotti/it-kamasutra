import React from 'react'
import s from './formControl.module.css'

export const CostomForm = type => ({input ,meta: {touched, error, warning}, ...props}) =>{
    
   

    let hasError = touched && error
    let errorclassname = hasError ? s.inputError : ''

    return (
        <div className={s.wrapper}>
            <input {...input} {...props} className={errorclassname} type={type} />
            {touched &&
                ((error && <span className={s.textError}>{error}</span>) ||
                    (warning && <span className={s.textError}>{warning}</span>))}
        </div>
    )
}

