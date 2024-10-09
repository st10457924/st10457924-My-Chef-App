Njabulo Shongwe 

St10457924 

MAST5112 Part 2 

 

 

 

 

 

 

 

 

 

 

 

Table of Content: 

 

 

 

 

 

 

 

 

 

 

 

 

 

Screenshots: 

 

This is the home page, the first page when the app is opened. It consists of the logo and slogan with two buttons 

 

 

 

 

This is the login page for the chef where he/she will enter their usernames and password to login 

 

 

 

 

After successfully logging in, this page will appear whereby the chef can add a dish that will show on the full menu for the users to see. The chef can add a dish name, description and price. 

 

 

 

 

The chef can decide on weather which category to add the dish 

 

 

 

 

These are all the starters menu, the chef also has an option to delete a dish 

 

 

 

 

 

These are all the main meals, the chef also has an option to delete a dish 

 

 

 

 

 

These are all the desserts; the chef also has an option to delete a dish 

 

 

 

 

 

 

Github link: 

 https://github.com/st10457924/st10457924-My-Chef-App.git 

 

 

 

YouTube Video: 

https://youtu.be/ALbEZNbzlts?feature=shared 



 App.ts:
 
 import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fullmenu from './screens/Fullmenu';
import ChefMenu from './screens/Chefmenu'
import LoginChef from './screens/loginchef';
import { DishProvider } from './screens/DishContext';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DishProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
      
        <Stack.Screen name='Fullmenu' component={Fullmenu}/>
        <Stack.Screen name="ChefMenu" component={ChefMenu} />
        <Stack.Screen name='loginChef' component={LoginChef}/>
        </Stack.Navigator>
    </NavigationContainer>
    </DishProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 

 

 

Referencing: 

Google, 2024. Gemini. [online] Available at: https://gemini.google.com/app [Accessed 8 October 2024]. 

React (2024) TypeScript with React. [online] Available at: https://react.dev/learn/typescript (Accessed: 8 October 2024). 

React Native (2024) React Native Documentation. [online] Available at: https://reactnative.dev/ (Accessed: 8 October 2024).  

React Navigation, 2024. Hello React Navigation. [online] Available at: https://reactnavigation.org/docs/hello-react-navigation/ [Accessed 8 October 2024]. 

 

 
