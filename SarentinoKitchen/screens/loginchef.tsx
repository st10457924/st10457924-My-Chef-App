import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  ChefMenu: undefined; 
};

type LoginChefNavigationProp = StackNavigationProp<RootStackParamList, 'ChefMenu'>;

interface Props {
  navigation: LoginChefNavigationProp; 
}

const LoginChef = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');

  const handleLogin = () => {
    if (username === '' || description === '') {
      Alert.alert('Error', 'Please enter username and description');
    } else {
      Alert.alert('Login Success', `Welcome, ${username}!`);
   
      navigation.navigate('ChefMenu');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Chef</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginChef;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5deb3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#d2691e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
