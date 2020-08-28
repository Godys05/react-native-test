import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';
import ManagePokemon from './Pages/managePokemon';
import AddPokemon from './Pages/addPokemon';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <AddPokemon />
      <ManagePokemon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
});
