import React from 'react';
import InputField from 'views/partials/InputField';

const LoginForm = ({errors, handleSubmit, renderErrorFor}) => (
    <form className="form" onSubmit={handleSubmit}> 
        <InputField type="email" name="email" text="E-mail" errors={errors} />
        <InputField type="password" name="password" text="Password" errors={errors} />
        <div className="field">
            <div className="control">
                <button type="submit" className="button is-info is-outlined is-inverted is-fullwidth is-medium">Sign in</button>
            </div>
        </div>
    </form>
);

export default LoginForm;