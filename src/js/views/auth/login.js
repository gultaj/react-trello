import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthLayout from '../../layouts/auth';
import { setDocumentTitle } from '../../utils/index';
import * as authActions from '../../actions/auth';

@connect(
    state => ({session: state.session}),
    dispatch => ({authActions: bindActionCreators(authActions, dispatch)})
)
export default class AuthLogin extends React.Component {

    componentDidMount() {
        setDocumentTitle('Sign in');
    }

    _handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.refs;
        const { dispatch } = this.props;

        dispatch(Actions.signIn(email.value, password.value));
    }

    _renderError(e) {
        const { error } = this.props;

        if (!error) return false;

        return (
            <div className="form__error">{error}</div>
        )
    }

    render() {
        return (
            <AuthLayout link="/auth/register" title="Sign up">
                <form className="form" onSubmit={::this._handleSubmit}>
                    {::this._renderError()}
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