
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HelloWorldScreen/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;