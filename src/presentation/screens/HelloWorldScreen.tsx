import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({name='World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={ styles.text }>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});