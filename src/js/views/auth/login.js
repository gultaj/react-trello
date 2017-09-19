import React from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../../layouts/auth';
import { setDocumentTitle, renderErrorFor } from '../../utils/index';
import { login } from '../../actions/auth';

@connect(state=> state.session)
export default class AuthLogin extends React.Component {

    componentDidMount() {
        setDocumentTitle('Sign in');
    }

    _handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.refs;
        this.props.dispatch(login(email.value, password.value));
    }

    render() {
        const { errors } = this.props;
        return (
            <AuthLayout link="/auth/register" title="Sign up">
                <form className="form" onSubmit={::this._handleSubmit}>
                    
                    <div className="form__group">
                        <input type="email" ref="email" className="form__field" name="email" id="email" placeholder="E-mail"/>
                    </div>
                    {renderErrorFor(errors, 'email')}
                    <div className="form__group">
                        <input type="password" ref="password" className="form__field" name="password" id="password" placeholder="Password"/>
                    </div>
                    {renderErrorFor(errors, 'password')}
                    <div className="form__group">
                        <button type="submit" className="btn form__field">Sign in</button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}