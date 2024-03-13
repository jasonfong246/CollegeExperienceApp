import React from "react";
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Home, Choice1Test, Choice2Test,PrologueScreen, NameInputScreen, GenderSelectionScreen, OrientationDay, Scene1  } from "./screens";

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" component={Login} />
        <Stack.Screen 
            name="Home" component={Home} />
        <Stack.Screen 
            name="Choice1Test" component={Choice1Test} />
        <Stack.Screen 
            name="Choice2Test" component={Choice2Test} />      
        <Stack.Screen 
            name="PrologueScreen" component={PrologueScreen} />
        <Stack.Screen 
            name="NameInputScreen" component={NameInputScreen} />
        <Stack.Screen 
            name="GenderSelectionScreen" component={GenderSelectionScreen} />
        <Stack.Screen 
            name="OrientationDay" component={OrientationDay} />
        <Stack.Screen 
            name="Scene1" component={Scene1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


