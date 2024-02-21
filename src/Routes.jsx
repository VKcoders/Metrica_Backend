import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Platform } from "react-native";
import {theme, options} from "./Config";

import CoverScreen from "./Screens/Stack/Cover";

import { stackScreens } from "./Screens";

const Stack = createStackNavigator();

export default function App() {
  // const tabSwitch = "";

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} backgroundColor="black" />
      <Stack.Navigator screenOptions={options} initialRouteName="Cover">
        {
          // [...Object.keys(stackScreens), tabSwitch]
          [...Object.keys(stackScreens)]
            .map((e, i) => <Stack.Screen key={`stack-${i}`} name={e} component={stackScreens[e]} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}