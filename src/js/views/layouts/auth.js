import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({children, link, title}) => (
    <main className="auth hero is-fullheight is-primary">
        <div className="hero-body">
            <div className="container is-fullhd columns is-centered is-mobile">
                <div className="column is-one-third">
                <header className="logo-header">
                    <div className="logo"></div>
                </header>
                {children}
                <footer className="auth__footer has-text-dark is-centered">
                    <Link to={link} className="auth__link">{title}</Link>
                </footer>
                </div>
            </div>
        </div>
    </main>
);

export default AuthLayout;