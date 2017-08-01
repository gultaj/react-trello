import React from 'react';
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayouts.jsx';
import RegistrationsNew from '../views/registrations/Form.jsx';

export default (
    <MainLayout>
        <Route path="/" component={RegistrationsNew}/>
    </MainLayout>
);