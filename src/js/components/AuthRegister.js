import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDocumentTitle, renderErrorFor } from 'utils/index';
import { register } from 'actions/auth';
import { bindActionCreators } from 'redux';
import AuthLayout from 'views/layouts/auth';
import RegisterForm from 'views/auth/registerForm';

@connect(
    state =>({errors: state.session.errors}),
    dispatch => ({register: bindActionCreators(register, dispatch)})
)
export default class AuthRegister extends Component {
    componentDidMount() {
        setDocumentTitle('Sign up');
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.register(new FormData(e.target));
    }

    render() {
        return (
            <AuthLayout link="/auth/login" title="Sign in">
                <RegisterForm errors={this.props.errors} 
                            handleSubmit={::this._handleSubmit} 
                            renderErrorFor={renderErrorFor} />
            </AuthLayout>
        );
    }
}