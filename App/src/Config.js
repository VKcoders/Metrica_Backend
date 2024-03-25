import { Platform } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

export const theme = {
     ...DefaultTheme,
     colors: {
          primary: "rgb(0, 122, 255)",
          background: "#cfcbcb",
          card: "rgb(255, 255, 255)",
          text: "rgb(28, 28, 30)",
          border: "rgb(216, 216, 216)",
          notification: "rgb(255, 59, 48)",
     }
}

export const options = {
     stack: {
          headerShown: false,
     },
     tab: {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { 
               backgroundColor: "#6F8FAF",
               borderTopWidth: 0,
               height: Platform.OS === "ios" ? 90 : 65,
               // borderTopRightRadius: Platform.OS === "ios" ? 50 : 30,
               // borderTopLeftRadius: Platform.OS === "ios" ? 50 : 30
          }
     }
};