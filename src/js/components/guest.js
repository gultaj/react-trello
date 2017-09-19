import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class Guest extends React.Component {
    render() {
        const { component } = this.props;
        const token = localStorage.getItem('trelloAuthToken');
        return (
            <Route render={ (props) => {
                return  !token ? 
                    (React.createElement(component, {...props})) :
                    (<Redirect to="/"/>);
            }} />
        );
    }
}