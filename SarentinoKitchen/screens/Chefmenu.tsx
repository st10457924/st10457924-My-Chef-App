import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DishContext } from './DishContext'; 

const ChefMenu = () => {
  const { addDish } = useContext(DishContext)!; 
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Starter');

  const handleAddDish = () => {
  
    if (dishName === '' || description === '' || price === '' || category === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newDish = {
      id: Math.random(),
      name: dishName,
      description,
      price,
      category,
    };

    addDish(newDish);

    Alert.alert(
      'Dish Added',
      `Dish: ${dishName}\nCategory: ${category}\nDescription: ${description}\nPrice: $${price}`
    );


    setDishName('');
    setDescription('');
    setPrice('');
    setCategory('Starter'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChefMenu;

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
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#d2691e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
