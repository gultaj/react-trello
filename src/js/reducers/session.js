import { AUTH } from '../constants/actionTypes';

const initialState = {
    currentUser: null,
    socket: null,
    errors: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case AUTH.LOGIN_SUCCESS:
            return { ...state, currentUser: action.payload, error: null};
        case AUTH.LOGIN_FAILED:
            return { ...state, errors: action.payload};    
        default:
            return state;
    }
}