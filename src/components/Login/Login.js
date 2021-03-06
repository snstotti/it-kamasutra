import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { logined, logout } from '../../redux/auth-reduce'
import { CostomForm } from '../common/formControl/formControl'
import s from './Login.module.css'
import { required, maxLengthCreator } from '../utils/validators'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Login = ({logined, isAuth, captchaUrl})=>{
   
    const onSubmit = (formData ) =>{
        const {email, password, rememberMe, captcha} = formData
        logined(email, password, rememberMe, captcha)
        console.log(captcha);
    }

    if(isAuth) return <Redirect to='/profile' />
    return(
        <div>
            <h1>Login</h1>
             <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
       
    )
}

const maxLength50 = maxLengthCreator(50)
const costomLogin = CostomForm('input')
const costomPassword = CostomForm('password')
const costomCheckbox = CostomForm('Checkbox')

const LoginForm = ({handleSubmit, error, captchaUrl})=>{
   
    return(
        <form onSubmit={handleSubmit} className={s.formLogin}>
            <div>
                <Field 
                    placeholder='Login' 
                    validate={[required, maxLength50]} 
                    component={costomLogin} 
                    name='email' />
            </div>
            <div>
                <Field 
                    placeholder='Password' 
                    validate={[required, maxLength50]} 
                    component={costomPassword} 
                    name='password' />
            </div>
            <div className={s.checkbox}>
                <Field 
                    component={costomCheckbox} 
                    name='checkbox'/> remember me
            </div>
            <div>
                {captchaUrl && <> 
                    <img src={captchaUrl} alt='captcha' />
                    <Field 
                    placeholder='text from captcha' 
                    validate={[required]} 
                    component={costomLogin} 
                    name='captcha' />
                    </>}
            </div>
            {error && <div className={s.errorForm}>
                <span>{error}</span>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect( mapStateToProps, {logined, logout})(Login) 