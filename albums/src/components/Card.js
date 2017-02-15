// Import a library for miking a Component
import React from 'react';
import { View } from 'react-native';
import CardSection from './CardSection';

// Make a Component
const Card = (props) => {
  return (
    <View style={styles.ContainerStyle}>
        {props.children}
    </View>
  );
};

const styles = {
  ContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// Make the component available for other parts of the app
export default Card;
