import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}
