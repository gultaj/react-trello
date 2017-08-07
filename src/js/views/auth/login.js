import React from 'react';
import AuthLayout from '../../layouts/auth';

export default class AuthLogin extends React.Component {
    render() {
        return (
            <AuthLayout link="/auth/register" title="Sign up">
                <form className="form">
                    <div className="form__field">
                        <input type="email" name="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form__field">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form__field">
                        <button type="submit" className="btn btn--form">Sign in</button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}