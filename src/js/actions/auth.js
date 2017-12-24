import { AUTH } from './actionConstants';
import { URL } from './api/apiConstants';
import { push } from 'react-router-redux';
import axios from 'axios';

export function login(formData) {
    return (dispatch) => {
        dispatch({ type: AUTH.LOGIN_REQUEST });
        axios.post(URL.login, formData)
            .then(({data}) => {
                localStorage.setItem('trelloAuthToken', data.token);
                dispatch({
                    type: AUTH.LOGIN_SUCCESS,
                    payload: data.user
                });
            })
            .catch(({response}) => {
                dispatch({
                    type: AUTH.LOGIN_FAILED,
                    payload: response.data
                });
            });
    };
}

export function register(formData) {
    return dispatch => {
        dispatch({ type: AUTH.REGISTER_REQUEST });
        axios.post(URL.register, formData)
            .then(({data}) => {
                dispatch({ type: AUTH.REGISTER_SUCCESS });
                dispatch(push('/auth/login'));
            })
            .catch(({response}) => {
                dispatch({
                    type: AUTH.REGISTER_FAILED,
                    payload: response.data
                });
            });
    };
}