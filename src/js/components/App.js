import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import AuthLogin from 'components/AuthLogin';
import AuthRegister from 'components/AuthRegister';
import PrivateRoute from './PrivateRoute';
import GuestRoute from './GuestRoute';
import { AnimatedSwitch } from 'react-router-transition';
import Home from 'views/home';
import BoardsShow from 'views/boards/show';
import NotFound from 'views/404';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <GuestRoute exact path="/auth/login" component={AuthLogin}/>
                    <GuestRoute exact path="/auth/register" component={AuthRegister}/>
                    
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/boards/:id" component={BoardsShow} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}