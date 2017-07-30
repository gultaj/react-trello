import React from 'react';
import { IndexRoute, Route } from 'react-router'
import MainLayout from '../layouts/MainLayouts.jsx';
import RegistrationsNew from '../views/registrations/Form.jsx';

export default (
    <Route component={MainLayout}>
        <Route path="/" component={RegistrationsNew}/>
    </Route>
);