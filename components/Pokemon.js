import * as React from 'react';
import 
{
  Text,
  View,
  StyleSheet,
  Image,
  ToolbarAndroid,
  ToastAndroid } from 'react-native';

import { Card } from 'react-native-paper';

export default function Pokemon({id, name, image}) {
  return (
    <Card style={styles.card}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>{name}</Text>
    </Card>
  );

  
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300
  },

  card: {
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
    color: "#212121",
    textAlign: "center"
  }
});
