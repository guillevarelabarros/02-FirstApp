
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
}

export const PrimaryButton = ({ label, onPress, onLongPress, disabled = false }: Props) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      buttonColor="#4CAF50"
      textColor="white"
      style={styles.button}
      labelStyle={styles.buttonText}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 120,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});