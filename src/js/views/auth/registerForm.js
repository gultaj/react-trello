import React from 'react';

const RegisterForm = ({errors, handleSubmit, renderErrorFor}) => (
    <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
            <input type="text" className="form__field" name="first_name" id="first_name" placeholder="First name"/>
        </div>
        {renderErrorFor(errors, 'first_name')}
        <div className="form__group">
            <input type="text" className="form__field" name="last_name" id="last_name" placeholder="Last name"/>
        </div>
        {renderErrorFor(errors, 'last_name')}        
        <div className="form__group">
            <input type="email" className="form__field" name="email" id="email" placeholder="E-mail"/>
        </div>
        {renderErrorFor(errors, 'email')}        
        <div className="form__group">
            <input type="password" className="form__field" name="password" id="password" placeholder="Password"/>
        </div>
        {renderErrorFor(errors, 'password')}        
        <div className="form__group">
            <input type="password" className="form__field" name="password_confirmation" id="password_confirmation" placeholder="Confirm password"/>
        </div>
        {renderErrorFor(errors, 'password_confirmation')}        
        <div className="form__group">
            <button type="submit" className="btn form__field">Sign up</button>
        </div>
    </form>
);

export default RegisterForm;