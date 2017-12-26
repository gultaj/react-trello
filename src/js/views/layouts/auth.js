import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({children, link, title}) => (
    <main className="auth hero is-fullheight">
        <div className="hero-body">
            <div className="container columns is-centered">
                <div className="column is-half">
                <header className="logo-header">
                    <div className="logo"></div>
                </header>
                {children}
                <footer className="auth__footer">
                    <Link to={link} className="auth__link">{title}</Link>
                </footer>
                </div>
            </div>
        </div>
    </main>
);

export default AuthLayout;