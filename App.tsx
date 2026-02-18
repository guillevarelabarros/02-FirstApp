
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { StatusBar, StyleSheet } from 'react-native';
import { paperTheme } from './src/presentation/theme/paperTheme';
import { IconProvider, getIoniconName } from './src/presentation/theme/iconConfig';
import { colors } from './src/presentation/theme/global.styles';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

const App = () => {
  return (
    <PaperProvider 
      theme={paperTheme}
      settings={{
        icon: (props) => <IconProvider {...props} name={getIoniconName(props.name)} />,
      }}
    >
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.background}
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <CounterM3Screen/>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;