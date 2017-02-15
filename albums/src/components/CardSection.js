// Import a library for miking a Component
import React from 'react';
import { View } from 'react-native';

// Make a Component
const CardSection = (props) => {
  return (
    <View style={styles.ContainerStyle}>
        {props.children}
    </View>
  );
};

const styles = {
  ContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  TextContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  }
};

// Make the component available for other parts of the app
export default CardSection;
