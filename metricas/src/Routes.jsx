import { StatusBar, Image, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {theme, options} from "./Config";
import { stackScreens, tabScreens } from "./Screens";
import { icons } from "./Localized";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const iconSize = { 
    width: 40, 
    height: 40, 
    marginTop: Platform.OS === "ios" ? 10 : 0
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={options.tab} >
      {
        [...Object.keys(tabScreens)]
          .map((e, _i) => <Tab.Screen 
              key={`t-${e}`}
              name={e}
              component={tabScreens[e]}
              options={{
                tabBarIcon: ({focused}) => <Image source={icons.tab[e]} style={[iconSize, focused && {tintColor: "#2F4F4F"}]} />
              }} 
            />
          )
      }
    </Tab.Navigator>
  )
}

export default function App() {
  const tabSwitch = "HomeTab";

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} backgroundColor="black" />
      <Stack.Navigator screenOptions={options.stack} initialRouteName="Cover">
        {
          [...Object.keys(stackScreens), tabSwitch]
            .map((e, _i) => {
                if (e === tabSwitch) {
                  return <Stack.Screen key={e} name={tabSwitch} component={HomeTab} />
                } 
                return (
                  <Stack.Screen key={`s-${e}`} name={e} component={stackScreens[e]} />
                );
              }
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}