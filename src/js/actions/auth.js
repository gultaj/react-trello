import { AUTH } from '../constants/actionTypes';
import { URL } from '../constants/api';
import { push } from 'react-router-redux';

export function login(email, password) {
    return (dispatch) => {
        dispatch({ type: AUTH.LOGIN_REQUEST });
        var formData = new FormData;
        formData.append('email', email);
        formData.append('password', password);
        fetch(URL.login, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => {
                    console.log(data);
                    localStorage.setItem('trelloAuthToken', data.token);
                    dispatch({
                        type: AUTH.LOGIN_SUCCESS,
                        payload: data.user 
                    });
                    dispatch(push('/'));
                });
            } else {
                res.json().then(error => {
                    dispatch({
                        type: AUTH.LOGIN_FAILED,
                        payload: error
                    });
                });
            }
        });
    };
}

export function register(first_name, last_name, email, password, password_confirmation) {
    return dispatch => {
        dispatch({ type: AUTH.REGISTER_REQUEST });

        fetch(URL.register, {
            method: 'POST',
            body: JSON.stringify({first_name, last_name, email, password, password_confirmation})
        })
        .then(res => res.json())
        .then(data => dispatch({ type: AUTH.REGISTER_SUCCESS }))
        .catch(error => dispatch({
            type: AUTH.REGISTER_FAILED,
            payload: error
        }));
    };
}