import { AUTH } from '../constants/actionTypes';

const initialState = {
    currentUser: null,
    socket: null,
    error: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case AUTH.LOGIN_SUCCESS:
            return { ...state, currentUser: action.payload, error: null};
        case AUTH.LOGIN_FAILED:
            return { ...state, error: action.payload};    
        default:
            return state;
    }
}