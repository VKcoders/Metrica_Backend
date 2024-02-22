import { DefaultTheme } from '@react-navigation/native';

export const theme = {
     ...DefaultTheme,
     colors: {
          primary: 'rgb(0, 122, 255)',
          background: '#D8D8D8',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(28, 28, 30)',
          border: 'rgb(216, 216, 216)',
          notification: 'rgb(255, 59, 48)',
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
               backgroundColor: '#6F8FAF',
               borderTopWidth: 0,
               height: 90,
               borderRadius: 50
          }
     }
};