import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, email, shift } = this.props;
        this.props.employeeCreate({ name, phone, email, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        autoCorrect={false}
                        value={this.props.name}
                        // gọi tới action employeeUpdate và truyền 2 biến là prop và value
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        keyboardType="phone-pad"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        label="Email"
                        value={this.props.email}
                        keyboardType="email-address"
                        onChangeText={text => this.props.employeeUpdate({ prop: 'email', value: text })}
                        />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabel}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    pickerLable: {
        fontSize: 20,
        paddingLeft: 20
    }
};

const mapStateToProp = (state) => {
    const { name, phone, email, shift } = state.employeeForm;
    //employeeForm được khai báo ở reducers/index.js

    return {
        name, phone, email, shift
    };
};

export default connect(mapStateToProp, {
    employeeUpdate,
    employeeCreate
})(EmployeeCreate);
