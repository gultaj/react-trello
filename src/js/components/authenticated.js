import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class Authenticated extends React.Component {
    render() {
        const { authenticated, component } = this.props;
        return (
            <Route render={ (props) => {
                return authenticated ? 
                    (React.createElement(component, {...props, authenticated})) :
                    (<Redirect to="/auth/login"/>);
            }} />
        );
    }
}