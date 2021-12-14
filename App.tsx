import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TasksScreen from './src/screens/Tasks';
import {Provider} from 'react-redux'
import {store} from './src/redux/store'
export default function App() {
  return (
    <Provider store={store}>
       <SafeAreaView style={{flex:1}}>
        <TasksScreen/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
