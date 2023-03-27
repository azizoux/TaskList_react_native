import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import TaskScreen from './src/screens/Tasks';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <TaskScreen />
      </SafeAreaView>
    </Provider>
  );
}