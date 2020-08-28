import * as React from 'react';
import 
{
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ToolbarAndroid,
  ToastAndroid } from 'react-native';

import { Card } from 'react-native-paper';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PokeCRUD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "slateblue",
  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    color: "snow"
  }
});
