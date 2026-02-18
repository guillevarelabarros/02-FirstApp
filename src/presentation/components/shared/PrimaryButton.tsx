
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
  label?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  iconName?: string;
}

export const PrimaryButton = ({ label, onPress, onLongPress, disabled = false, iconName }: Props) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      icon={iconName}
      style={[styles.button, !label && styles.iconOnlyButton]}
      labelStyle={styles.buttonText}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 120,
    borderRadius: 16,
  },
  iconOnlyButton: {
    minWidth: 64,
    height: 64,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});