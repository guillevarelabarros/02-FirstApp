
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{ count }</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonDanger]}
          onPress={ () => setCount(count - 1) }
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonPrimary]}
          onPress={ () => setCount(count + 1) }
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.button, styles.buttonSecondary]}
        onPress={ () => setCount(0) }
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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