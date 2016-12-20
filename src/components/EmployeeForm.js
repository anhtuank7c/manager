import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { CardSection, Input, Button } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const styles = {
    pickerLable: {
        fontSize: 20,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, email, shift } = state.employeeForm;
    return { name, phone, email, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
