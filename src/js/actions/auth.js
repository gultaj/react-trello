import { AUTH } from './actionConstants';
import { URL } from './api/apiConstants';
import { push } from 'react-router-redux';

export function login(formData) {
    return (dispatch) => {
        dispatch({ type: AUTH.LOGIN_REQUEST });
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

export function register(formData) {
    return dispatch => {
        dispatch({ type: AUTH.REGISTER_REQUEST });

        fetch(URL.register, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => dispatch({ type: AUTH.REGISTER_SUCCESS }))
        .catch(error => dispatch({
            type: AUTH.REGISTER_FAILED,
            payload: error
        }));
    };
}