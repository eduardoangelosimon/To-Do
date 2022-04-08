import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationBar from './src/components/NavigationBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
