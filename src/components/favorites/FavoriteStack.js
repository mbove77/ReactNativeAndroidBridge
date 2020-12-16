import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from "./FavoritesScreen";
import Colors from "../../res/Colors";


const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl
      },
      headerTintColor: Colors.white
    }}>
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
    </Stack.Navigator>
  )
};

export default FavoritesStack
