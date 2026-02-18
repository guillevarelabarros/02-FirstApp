
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const CounterScreen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{ count }</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable 
          style={({pressed}) => [
            styles.button, 
            styles.buttonDanger,
            pressed && styles.buttonPressed
          ]}
          onPress={ () => setCount(count - 1) }
        >
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        <Pressable 
          style={({pressed}) => [
            styles.button, 
            styles.buttonPrimary,
            pressed && styles.buttonPressed
          ]}
          onPress={ () => setCount(count + 1) }
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
      </View>

      <Pressable 
        style={({pressed}) => [
          styles.button, 
          styles.buttonSecondary,
          pressed && styles.buttonPressed
        ]}
        onPress={ () => setCount(0) }
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  counterContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 60,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  buttonPrimary: {
    backgroundColor: '#4CAF50',
  },
  buttonDanger: {
    backgroundColor: '#f44336',
  },
  buttonSecondary: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});