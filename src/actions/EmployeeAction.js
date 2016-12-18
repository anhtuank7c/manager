import firebase from 'firebase';

import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, email, phone, shift }) => {
    console.log(name, email, phone, shift);
    const { currentUser } = firebase.auth();
    console.log(currentUser);

    firebase.database()
        .ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, email, shift });
};
