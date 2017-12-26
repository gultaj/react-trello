import React from 'react';

const LoginForm = ({errors, handleSubmit, renderErrorFor}) => (
    <form className="form" onSubmit={handleSubmit}> 
        <div className="field">
            <div className="control">
                <input type="email" className="input is-medium" name="email" id="email" placeholder="E-mail"/>
            </div>
            {renderErrorFor(errors, 'email')}
        </div>  
        <div className="field">
            <div className="control">
                <input type="password" className="input is-medium" name="password" id="password" placeholder="Password"/>
            </div>
            {renderErrorFor(errors, 'password')}
        </div>
        <div className="field">
            <div className="control">
                <button type="submit" className="button is-info is-outlined is-fullwidth is-medium">Sign in</button>
            </div>
        </div>
    </form>
);

export default LoginForm;