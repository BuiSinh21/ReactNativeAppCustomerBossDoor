
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigator/AppNavigator';
import { persistor, rootStore } from './redux/store';
const componentName = () => {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={<></>} 
      persistor={persistor}
      >
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default componentName;

