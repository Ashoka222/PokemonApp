import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PokemonDetailsScreen, PokemonScreen} from '../screens';
import ScreenNames from './ScreenNames';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonScreen">
      <Stack.Screen
        component={PokemonScreen}
        name={ScreenNames.PokemonScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PokemonDetailsScreen}
        name={ScreenNames.PokemonDetailsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Pokemon Details Screen',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
