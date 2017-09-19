import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainLayout from '../layouts/main';
import Auth from '../layouts/auth';
import AuthLogin from '../views/auth/login';
import AuthRegistration from '../views/auth/registration';
import Authenticated from '../components/authenticated';
import Guest from '../components/guest';
import Home from '../views/home';
import BoardsShow from '../views/boards/show';
import NotFound from '../views/404';

export default (
    <Switch>
        <Guest exact path="/auth/login" component={AuthLogin}/>
        <Guest exact path="/auth/register" component={AuthRegistration}/>

        <Authenticated exact path="/" component={Home} />
        <Authenticated exact path="/boards/:id" component={BoardsShow} />
        <Route component={NotFound} />
    </Switch>
);