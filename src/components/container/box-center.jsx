import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Container = ({children, style}) => {
  return (
      <View
        style={[{
            flex: 1,
            backgroundColor: "white",
            alignItems:"center",
            justifyContent: "center"
        }, style]}
      >
          {children}
      </View>
  );
}

export default Container;
