import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from "./CoinScreen";
import CoinDetailScreen from "./coinDetails/CoinDetailScreen";

import Colors from "../res/Colors";

const Stack = createStackNavigator();

const CoinStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl
      },
      headerTintColor: Colors.white
    }}>
      <Stack.Screen name={props.windowTittle} component={CoinScreen} />
      <Stack.Screen name='CoinDetail' component={CoinDetailScreen} />
    </Stack.Navigator>
  )
};

export default CoinStack;
