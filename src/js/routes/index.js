import React from 'react';
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/main';
import AuthLogin from '../views/auth/login';
import AuthRegistration from '../views/auth/registration';
import Authenticated from '../containers/authenticated';
import Home from '../views/home';
import BoardsShow from '../views/boards/show';

const Match = () => (
    <MainLayout>
        <Route path="/auth/login" component={AuthLogin}/>
        <Route path="/auth/registration" component={AuthRegistration}/>

        <Authenticated>
            <Route exact path="/" component={Home}/>
            <Route path="/boards/:id" component={BoardsShow}/>
        </Authenticated>
    </MainLayout>
);

export default Match;