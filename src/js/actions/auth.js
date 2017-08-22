import { AUTH } from '../constants/actionTypes';
import { URL } from '../constants/api';

export function login(email, password) {
    return (dispatch) => {
        dispatch({ type: AUTH.LOGIN_REQUEST });

        fetch(URL.login, {
            method: 'POST', 
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => dispatch({
           type: AUTH.LOGIN_SUCCESS,
           payload: data.token 
        }))
        .catch(error => dispatch({
            type: AUTH.LOGIN_FAILED,
            payload: error
        }));
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