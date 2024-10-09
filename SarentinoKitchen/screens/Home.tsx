import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  ChefLogin: undefined; 
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ChefLogo.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Shongwe Eats</Text>
      <Text style={styles.slogan}>Savor every moment</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fullmenu')}>
        <Text style={styles.buttonText}>Full Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('loginChef')}>
        <Text style={styles.buttonText}>Chef Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5deb3',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#d2691e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
