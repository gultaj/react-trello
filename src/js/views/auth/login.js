import React from 'react';
import AuthLayout from '../../layouts/auth';

export default class AuthLogin extends React.Component {
    render() {
        return (
            <AuthLayout link="/auth/register" title="Sign up">
                <form className="form">
                    <div className="form__group">
                        <input type="email" className="form__field" name="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form__group">
                        <input type="password" className="form__field" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn form__field">Sign in</button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}