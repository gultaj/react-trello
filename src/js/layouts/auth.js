import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({children, link, title}) => (
    <main className="auth">
        <header>
            <div className="logo">Trello</div>
        </header>
        {children}
        <footer className="auth__footer">
            <Link to={link}>{title}</Link>
        </footer>
    </main>
);

export default AuthLayout;