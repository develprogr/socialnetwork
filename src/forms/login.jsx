import React from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, maxLengthCreator, requiredField } from '../utils/validators';
import { Input } from './FormsControl/FormsControl';
import s from './forms.module.css';
import { Redirect } from 'react-router';
import {values} from 'redux-form'


const LoginForm = (props) => {

    const onSubmit = (values) => {
        props.login(values.login, values.password, values.rememberMe); 
    }

    if (props.isAuthorized) {
        return <Redirect to={'/profile'} />
    };


    return <Form 
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.addPost}>
            <h3>Login</h3>
            <div>
                <Field name="login" component={Input} placeholder='Login'
                    validate={composeValidators(maxLengthCreator(50), requiredField)} />
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} type={'password'}
                        name={'password'} validate={composeValidators(maxLengthCreator(30), requiredField)} />

                </div>
                    {props.error && 
                        <div className={s.formError}>
                            {props.error}
                        </div>
                    }
                <div>
                    <Field component={'input'} type='checkbox' name={'rememberMe'} className={s.checkbox} /> Remember me
                </div>
            <button type="submit">Login</button>
        </form>
    )}

    />
};



export default LoginForm;

