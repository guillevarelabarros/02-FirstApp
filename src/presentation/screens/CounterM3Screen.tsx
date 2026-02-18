
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Surface, Divider } from 'react-native-paper';
import { globalStyles, colors, spacing } from '../theme/global.styles';
import { PrimaryButton } from '../components';

export const CounterM3Screen = () => {

  const [ count, setCount ] = useState( 10 );

  const incrementBy = ( value: number ) => {
    setCount( count + value );
  };

  const reset = () => {
    setCount( 0 );
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Surface style={styles.mainCard} elevation={4}>
        <Text style={[globalStyles.headlineLarge, styles.title]}>Contador M3</Text>
        
        <Divider style={styles.divider} />
        
        <View style={styles.counterContainer}>
          <Text style={styles.countText}>{count}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            iconName="plus"
            onPress={() => incrementBy(1)}
            onLongPress={() => incrementBy(5)}
          />
          
          <PrimaryButton
            iconName="minus"
            onPress={() => incrementBy(-1)}
            onLongPress={() => incrementBy(-5)}
          />
        </View>

        <Text style={[globalStyles.bodyMedium, styles.hint]}>
          💡 Mantén presionado para ±5
        </Text>
      </Surface>

      <FAB
        icon="refresh"
        style={globalStyles.fab}
        onPress={reset}
        size="medium"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    width: '90%',
    maxWidth: 500,
    borderRadius: 24,
    padding: spacing.xxl,
    backgroundColor: colors.surface,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  divider: {
    marginBottom: spacing.xl,
    backgroundColor: colors.outlineVariant,
  },
  counterContainer: {
    backgroundColor: colors.primaryContainer,
    borderRadius: 20,
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  countText: {
    fontSize: 96,
    fontWeight: '800',
    color: colors.primary,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: spacing.lg,
    marginBottom: spacing.lg,
    justifyContent: 'center',
  },
  hint: {
    textAlign: 'center',
    color: colors.onSurfaceVariant,
    fontSize: 13,
  },
});
