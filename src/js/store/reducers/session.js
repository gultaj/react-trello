import { AUTH } from 'actions/actionConstants';

const initialState = {
    currentUser: null,
    socket: null,
    errors: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case AUTH.LOGIN_SUCCESS:
            return { ...state, currentUser: action.payload, errors: null};
        case AUTH.LOGIN_FAILED:
        case AUTH.REGISTER_FAILED:
            return { ...state, errors: action.payload};  
        case AUTH.REGISTER_SUCCESS: 
            return { ...state, errors: null };
        default:
            return state;
    }
}