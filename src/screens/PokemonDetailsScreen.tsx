import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PokemonDetailsProps {
  route: object;
}

const PokemonDetailsScreen = ({route}: PokemonDetailsProps) => {
  console.log(
    '🚀 ~ file: PokemonDetailsScreen.tsx:5 ~ PokemonDetailsScreen ~ routes:',
    route,
  );
  return (
    <View style={styles.container}>
      <Text>Pokemon Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokemonDetailsScreen;
