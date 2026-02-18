
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Guille Varela Barros' />  */ }
        <CounterScreen/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;