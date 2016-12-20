import {
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_DELETE_SUCCESSFUL
} from '../actions/types';

const INITIAL_STATE = {

};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        case EMPLOYEE_DELETE_SUCCESSFUL:
            return action.payload;
        default:
            return state;
    }
};

