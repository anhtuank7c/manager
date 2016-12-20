import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate, resetForm } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.resetForm();
    }

    onButtonPress() {
        const { name, phone, email, shift } = this.props;
        this.props.employeeCreate({ name, phone, email, shift: shift || 'Monday' });
    }

    render() {
        // passing all props from this component to EmployeeForm component
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, email, shift } = state.employeeForm;
    //employeeForm được khai báo ở reducers/index.js

    return {
        name, phone, email, shift
    };
};

export default connect(mapStateToProp, {
    employeeUpdate,
    employeeCreate,
    resetForm
})(EmployeeCreate);
