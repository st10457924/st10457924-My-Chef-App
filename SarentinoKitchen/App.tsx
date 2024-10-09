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
