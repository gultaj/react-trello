import React from 'react';

const LoginForm = ({errors, handleSubmit, renderErrorFor}) => (
    <form className="form" onSubmit={handleSubmit}> 
        <div className="form__group">
            <input type="email" className="form__field" name="email" id="email" placeholder="E-mail"/>
        </div>
        {renderErrorFor(errors, 'email')}
        <div className="form__group">
            <input type="password" className="form__field" name="password" id="password" placeholder="Password"/>
        </div>
        {renderErrorFor(errors, 'password')}
        <div className="form__group">
            <button type="submit" className="btn form__field">Sign in</button>
        </div>
    </form>
);

export default LoginForm;