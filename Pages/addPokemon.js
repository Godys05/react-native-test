import React, {useState, useEffect, useCallback} from 'react';
import 
{
  TextInput,
  ScrollView,
  Button,
  Text,
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import axios from "axios";

import Pokemon from '../components/Pokemon';

const POKEMON_API = {url: 'http://localhost:8000/api/pokemon'};

const AddPokemon = () => {
  const [pokemon, setPokemon] = useState(
    {
      id: 0,
      name: 'Bulbasaur',
      image: 'gugle mi'
  });
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const addPokemon = async () => {
    setSuccess(false);
    setFail(false);

    let count = 0;
    await axios.get(POKEMON_API.url)
    .then(res => {
        count = res.data.count+1;
        setPokemon({...pokemon, id: count});
        console.log(pokemon)
        axios.post(POKEMON_API.url,
          {
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon.image,
          })
          .then(res => {
              console.log(res);
              setSuccess(true);
          })
          .catch(err => {
              console.log(err);
              setFail(true)
          });
    })
    .catch(err => setFail(true));
  }

  
  const handleClick = () => {
    addPokemon();
  }

  return(
    <View>
      {success ? <Text>YUPI, IT WORKED!</Text> : <></>}
      {fail ? <Text>ERROR</Text> : <></>}
      <Text>Name:</Text>
      <TextInput style={styles.input} onChangeText={text => setPokemon({...pokemon, name: text})} />
      <Text>Image:</Text>
      <TextInput style={styles.input} onChangeText={text => setPokemon({...pokemon, image: text})} />
      <Button style={{borderRadius: 10}}title='ADD POKEMON' color='green' onPress={() => {handleClick()}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
   height: 40,
   borderColor: '#212121',
   opacity: 0.8,
   borderWidth: 1,
   borderRadius: 10,
   marginTop: 2,
   marginBottom: 5
  }
});

export default AddPokemon;