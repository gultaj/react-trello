import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

@connect(state => ({authenticated: Boolean(state.session.currentUser)}))
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