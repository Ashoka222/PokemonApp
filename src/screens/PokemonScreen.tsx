import React, {PropsWithChildren, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Loading, PokemonItem} from '../components';

type PokemonProps = PropsWithChildren<{
  name: string;
}>;

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=';

const PokemonScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<[PokemonProps] | any[]>([]);
  const [isNext, setIsNext] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPokemon(isPagination = false) {
    if (isPagination) {
      setIsPaginationLoading(true);
    } else {
      setIsLoading(true);
    }
    const response = await fetch(baseUrl + offset)
      .then(res => res.json())
      .catch(error => {
        Alert.alert('Error: ' + error);
      });

    if (response) {
      setPokemonList(prev => [...prev, ...response.results]);
      setIsNext(response.next ? true : false);
    }
    if (isPagination) {
      setIsPaginationLoading(false);
    } else {
      setIsLoading(false);
    }
    setOffset(prev => prev + 20);
  }

  function fetchMoreData() {
    console.log('Fetching more data');
    if (!isLoading && isNext && !isPaginationLoading) {
      getPokemon(true);
    }
  }

  const renderFooterComponent = () => (
    <View style={styles.listFooter}>
      <ActivityIndicator size={'large'} color="black" />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Pokemon Screen</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={pokemonList}
            renderItem={({item, index}) => {
              return <PokemonItem item={item} index={index} />;
            }}
            numColumns={2}
            refreshing={isLoading}
            refreshControl={<RefreshControl refreshing={isLoading} />}
            onRefresh={() => getPokemon()}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            ListFooterComponent={renderFooterComponent}
          />
        </View>
      </View>
      <Loading isLoading={isLoading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listFooter: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  flatListContainer: {
    flex: 2,
    marginHorizontal: 'auto',
    margin: 10,
  },
});

export default PokemonScreen;
