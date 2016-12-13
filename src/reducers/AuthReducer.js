import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            // return new state object with all current props,
            // override email props by taking value from action.payload 
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            // return new state object with all current props,
            // override password props by taking value from action.payload 
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            // return new state object with all current props,
            // override all props by INITIAL_STATE
            // override props user by taking value from action.payload 
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            };
        case LOGIN_USER_FAIL:
            return { ...state, ...INITIAL_STATE, error: action.payload, loading: false };
        default:
            return state;
    }
};
