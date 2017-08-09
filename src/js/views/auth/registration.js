import React from 'react';
import AuthLayout from '../../layouts/auth';

export default class AuthRegistration extends React.Component {
    render() {
        return (
            <AuthLayout link="/auth/login" title="Sign in">
                <form className="form">
                    <div className="form__group">
                        <input type="text" className="form__field" name="first_name" id="first_name" placeholder="First name"/>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__field" name="last_name" id="last_name" placeholder="Last name"/>
                    </div>
                    <div className="form__group">
                        <input type="email" className="form__field" name="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form__group">
                        <input type="password" className="form__field" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form__group">
                        <input type="password" className="form__field" name="confirm_password" id="confirm_password" placeholder="Confirm password"/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn form__field">Sign up</button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}