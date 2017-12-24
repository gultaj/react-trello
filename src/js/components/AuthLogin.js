import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDocumentTitle, renderErrorFor } from 'utils/index';
import { bindActionCreators } from 'redux';
import { login } from 'actions/auth';
import AuthLayout from 'views/layouts/auth';
import LoginForm from 'views/auth/loginForm';

@connect(
    state => ({errors: state.session.errors}),
    dispatch => ({login: bindActionCreators(login, dispatch)})
)
export default class AuthLogin extends Component {
    componentDidMount() {
        setDocumentTitle('Sign in');
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.login(new FormData(e.target));
    }

    render() {
        return (
            <AuthLayout link="/auth/register" title="Sign up">
                <LoginForm errors={this.props.errors} handleSubmit={::this._handleSubmit} renderErrorFor={renderErrorFor} />
            </AuthLayout>
        );
    }
}