import React from "react";
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TheTeam,About,Login, Home } from "./HomeScreen";
import { PrologueScreen, NameInputScreen, GenderSelectionScreen, OrientationDay, Scene1, ChooseAvatar  } from "./OrientationScreen";
import { AcademicSeminar, Library } from "./Scene2Files/AcademicScreen";
import { CampusTour } from "./Scene2Files/CampusTourScreen";
import { DormIntro } from "./Scene2Files/DormIntroScreen";
import { WanderAlone } from "./Scene2Files/WanderAloneScreen";

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
            name="TheTeam" component={TheTeam} />
        <Stack.Screen 
            name="About" component={About} />      
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
        <Stack.Screen 
            name="ChooseAvatar" component={ChooseAvatar} />
        <Stack.Screen 
            name="AcademicSeminar" component={AcademicSeminar} />
        <Stack.Screen 
            name="Library" component={Library} />
        <Stack.Screen 
            name="CampusTour" component={CampusTour} />
        <Stack.Screen 
            name="DormIntro" component={DormIntro} />
        <Stack.Screen 
            name="WanderAlone" component={WanderAlone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


