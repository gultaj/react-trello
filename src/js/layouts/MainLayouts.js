import React from 'react';

import { Link, Route } from 'react-router-dom';
import RegistrationsForm from '../views/registrations/Form.js'

// export default class MainLayout extends React.Component {
//     render() {
//         return null;
//     }
// }

const MainLayout = () => (
    <div>
        <nav>
            <Link to="/dashboard">RegistrationsForm</Link>
        </nav>
        <div>
            <Route path="/dashboard" component={RegistrationsForm}/>
        </div>
    </div>
)

export default MainLayout;