import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDocumentTitle, renderErrorFor } from 'utils/index';
import { login } from 'actions/auth';
import AuthLayout from 'views/layouts/auth';
import RegisterForm from 'views/auth/registerForm';

@connect(state => state.session)
export default class AuthRegister extends Component {
    componentDidMount() {
        setDocumentTitle('Sign up');
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <AuthLayout link="/auth/login" title="Sign in">
                <RegisterForm errors={this.errors} 
                            handleSubmit={::this._handleSubmit} 
                            renderErrorFor={renderErrorFor} />
            </AuthLayout>
        );
    }
}