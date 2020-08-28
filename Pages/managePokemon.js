import React, {useState, useEffect, useCallback} from 'react';
import 
{
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

const ManagePokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
    const getAllPokemon = async () => {
      await axios.get(POKEMON_API.url)
      .then(res => {
        setPokemon(res.data.pokemon);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

    if (pokemon.length === 0) getAllPokemon();
  }, [pokemon]);


  return(
    <ScrollView>
        {
          pokemon.map(poke => {
            return(<Pokemon id ={poke.id} name={poke.name} image={poke.image}/>)
          })
        }
      </ScrollView>
  )
}


export default ManagePokemon;

