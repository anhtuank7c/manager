import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentWillMount() {
        _.map(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onPressEditButton() {
        const { name, phone, email, shift } = this.props;
        this.props.employeeSave({ name, phone, email, shift, uid: this.props.employee.uid });
    }

    onPressTextButton() {
        const { name, phone, shift } = this.props;
        Communications.text(phone, `Hi ${name}, Your upcoming shift is on ${shift}`);
    }

    onAcceptFireEmployee() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDeclineFireEmployee() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onPressEditButton.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onPressTextButton.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAcceptFireEmployee.bind(this)}
                    onDecline={this.onDeclineFireEmployee.bind(this)}
                    >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, email, shift } = state.employeeForm;
    return { name, phone, email, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);

