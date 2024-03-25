import { StatusBar, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {theme, options} from "./Config";
import Screens from "./Screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} backgroundColor="black" />
      <Stack.Navigator screenOptions={options.stack} initialRouteName="Cover">
        {
          Object.keys(Screens).map((e, _i) => <Stack.Screen key={`s-${e}`} name={e} component={Screens[e]} /> )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}