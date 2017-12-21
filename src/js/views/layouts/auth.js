import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({children, link, title}) => (
    <main className="auth">
        <header className="logo-header">
            <div className="logo"></div>
        </header>
        {children}
        <footer className="auth__footer">
            <Link to={link} className="auth__link">{title}</Link>
        </footer>
    </main>
);

export default AuthLayout;