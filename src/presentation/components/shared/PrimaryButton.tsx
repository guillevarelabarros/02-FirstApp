
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
}

export const PrimaryButton = ({ label, onPress, onLongPress, disabled = false }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.buttonPressed,
        disabled && styles.buttonDisabled,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});