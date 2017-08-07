import React from 'react';
import AuthLayout from '../../layouts/auth';

export default class AuthRegistration extends React.Component {
    render() {
        return (
            <AuthLayout link="/auth/login" title="Sign in">
                <form className="form">
                    <div className="form__field">
                        <input type="text" name="first_name" id="first_name" placeholder="First name"/>
                    </div>
                    <div className="form__field">
                        <input type="text" name="last_name" id="last_name" placeholder="Last name"/>
                    </div>
                    <div className="form__field">
                        <input type="email" name="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password"/>
                    </div>
                    <div className="form__field">
                        <button type="submit" className="btn btn--form">Sign in</button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}