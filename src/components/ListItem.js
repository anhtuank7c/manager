import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class ListItem extends Component {

    onItemPress() {
        Actions.employeeCreate({ employee: this.props.employee });
    }

    render() {
        const { name, uid } = this.props.employee;
        return (
            <TouchableWithoutFeedback
                onPress={this.onItemPress} >
                <View>
                    <CardSection key={uid}>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
