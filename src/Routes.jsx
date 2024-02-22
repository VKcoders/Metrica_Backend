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
  const iconSize = { width: 40, height: 40, marginTop: 10 };

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

// const AdmMenu = () => {
//   const options = {
//     headerShown: false,
//     tabBarShowLabel: false,
//     tabBarActiveBackgroundColor: "#483d8b",
//     tabBarStyle: { 
//       backgroundColor: "rgb(07,25,51)",
//       borderTopWidth: 0,
//       height: Platform.OS === "ios" ? 85 : 65,
//     },
    
//   };

//   const icon = (name, _focused) => {
//     const css = {width: 40, height: 40};
//     let imagePath;
//     switch (name) {
//       case "adoption":
//         imagePath = images.tab.adoption;
//         break;
//       case "missing":
//         imagePath = images.tab.missing;
//         break;
//       case "alert":
//         imagePath = images.tab.alert;
//         break;
//       case "rescue":
//         imagePath = images.tab.rescue;
//         break;
//       case "complain":
//         imagePath = images.tab.complain;
//         break;
//     }
    
//     return <Image source={imagePath} style={css} />
//   }

//   return (
//     <Tab.Navigator initialRouteName="TAlert" screenOptions={options} >
//       <Tab.Screen 
//         name="TAdoption" 
//         component={TAdoptionScreen}
//         options={{ tabBarIcon: ({focused}) => icon("adoption", focused) }}
//       />
//       <Tab.Screen
//         name="TMissing" 
//         component={TMissingScreen}
//         options={{ tabBarIcon: ({focused}) => icon("missing", focused) }}
//       />
//       <Tab.Screen 
//         name="TAlert"
//         component={TAlertScreen}
//         options={{ tabBarIcon: ({focused}) => icon("alert", focused) }}
//       />
//       <Tab.Screen 
//         name="TRescue"
//         component={TRescueScreen}
//         options={{ tabBarIcon: ({focused}) => icon("rescue", focused) }}
//       />
//       <Tab.Screen 
//         name="TComplain"
//         component={TComplainScreen}
//         options={{ tabBarIcon: ({focused}) => icon("complain", focused) }}
//       />
//     </Tab.Navigator>
//   )
// }