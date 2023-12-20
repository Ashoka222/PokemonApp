import React, {PropsWithChildren, memo, useState} from 'react';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ScreenNames from '../navigations/ScreenNames';
import {NavigationService} from '../navigations/NavigationService';

type PokemonProps = PropsWithChildren<{
  item: {
    name: string;
  };
  index: number;
}>;

const PokemonItem = ({item, index}: PokemonProps) => {
  const [error, setError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();

  const getUri = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;

  function Capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const onPressPokemon = () => {
    console.log('item:', item);
    NavigationService.navigate(ScreenNames.PokemonDetailsScreen, {item, index});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressPokemon}>
      <Image
        source={{
          uri: error
            ? 'https://pokeapi.co/static/pokeapi_256.3fa72200.png'
            : getUri(),
        }}
        style={styles.imageStyle}
        resizeMode="contain"
        onError={e => {
          console.log('🚀 ~ file: PokemonItem.tsx:37 ~ PokemonItem ~ e:', e);
          setError(e);
        }}
      />
      <Text style={styles.nameText}>{Capitalize(item.name)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {height: 3, width: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    // marginRight: 8,
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    // flex: 1,
  },
});

export default memo(PokemonItem);
