import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainLayout from '../layouts/main';
import Auth from '../layouts/auth';
import AuthLogin from '../views/auth/login';
import AuthRegistration from '../views/auth/registration';
import PrivateRoute from '../components/authenticated';
import GuestRoute from '../components/guest';
import Home from '../views/home';
import BoardsShow from '../views/boards/show';
import NotFound from '../views/404';

export default (
    <Switch>
        <GuestRoute exact path="/auth/login" component={AuthLogin}/>
        <GuestRoute exact path="/auth/register" component={AuthRegistration}/>

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/boards/:id" component={BoardsShow} />
        <Route component={NotFound} />
    </Switch>
);