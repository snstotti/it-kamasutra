import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../common/utils/validators'
import { CostomForm } from '../common/utils/formControl'
import s from './Login.module.css'

const Login = ()=>{
    const onSubmit = (values ) =>{
        console.log(values )
    }
    return(
        <div>
            <h1>Login</h1>
             <LoginReduxForm onSubmit={onSubmit} />
        </div>
       
    )
}
const maxLength10 = maxLengthCreator(10)

const LoginForm = ({handleSubmit})=>{
   
    return(
        <form onSubmit={handleSubmit} className={s.formLogin}>
            <div>
                <Field placeholder='Login' validate={[required, maxLength10]} component={CostomForm('input')} name='login' />
            </div>
            <div>
                <Field placeholder='Password' validate={[required, maxLength10]} component={CostomForm('input')} name='password' />
            </div>
            <div className={s.checkbox}>
                <Field component={CostomForm('checkbox')} name='checkbox'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login