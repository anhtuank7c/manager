import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={[styles.cardSectionContainer, props.style]}>
    {props.children}
  </View>
);

const styles = {
  cardSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    position: 'relative'
  }
};

export { CardSection };
