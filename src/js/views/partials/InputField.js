import React from 'react';

const InputField = ({type, name, text, errors}) => {
    const errorClass = errors && errors[name] ? 'is-danger' : '';
    return (
        <div className="field">
            <div className="control">
                <input type={type} className={'input is-medium ' + errorClass}  name={name} id={name} placeholder={text} />
            </div>
            { errorClass ? (<p className="help is-dark has-text-weight-semibold">{errors[name]}</p>) : null }
        </div>
    );
}
export default InputField;