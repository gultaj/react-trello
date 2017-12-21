import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

@connect(state => ({authenticated: state.session.authenticated}))
export default class GuestRoute extends Component {
    render() {
        const {component: ComposedComponent, authenticated, ...rest} = this.props;
        return (
            <Route {...rest} render={ (props) => (
                !authenticated ? 
                    (<ComposedComponent {...props} />) :
                    (<Redirect to="/" />)
            )} />
        );
    }
}