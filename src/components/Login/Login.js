import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { login, logout } from '../../redux/auth-reduce'
import { CostomForm } from '../common/formControl/formControl'
import s from './Login.module.css'
import { required, maxLengthCreator } from '../utils/validators'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Login = ({login, isAuth})=>{
   
    const onSubmit = (formData ) =>{
        const {email, password, checkbox} = formData
        login(email, password, checkbox)

        console.log(formData )
    }

    if(isAuth) return <Redirect to='/profile' />
    return(
        <div>
            <h1>Login</h1>
             <LoginReduxForm onSubmit={onSubmit} />
        </div>
       
    )
}
const maxLength50 = maxLengthCreator(50)
const costomLogin = CostomForm('input')
const costomPassword = CostomForm('password')
const costomCheckbox = CostomForm('Checkbox')

const LoginForm = ({handleSubmit})=>{
   
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
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect( mapStateToProps, {login, logout})(Login) 