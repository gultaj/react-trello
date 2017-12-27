import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({children, link, title}) => (
    <main className="auth hero is-fullheight is-primary">
        <div className="hero-body">
            <div className="container columns is-centered is-fluid">
                <div className="column is-one-quarter">
                <header className="logo-header">
                    <div className="logo"></div>
                </header>
                {children}
                <footer className="auth__footer section is-paddingless">
                    <Link to={link} className="button is-fullwidth is-info">{title}</Link>
                </footer>
                </div>
            </div>
        </div>
    </main>
);

export default AuthLayout;