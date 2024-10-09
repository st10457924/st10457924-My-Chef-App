import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { DishContext } from './DishContext'; 

const FullMenu = () => {
  const { dishes, deleteDish } = useContext(DishContext)!; 
  const [filter, setFilter] = useState('All');

  const filteredDishes = dishes.filter((dish) => {
    if (filter === 'All') return true;
    return dish.category === filter;
  });

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => setFilter('All')} />
        <Button title="Starters" onPress={() => setFilter('Starter')} />
        <Button title="Main" onPress={() => setFilter('Main')} />
        <Button title="Dessert" onPress={() => setFilter('Dessert')} />
      </View>
      <ScrollView>
        {filteredDishes.map((dish) => (
          <View key={dish.id} style={styles.dishContainer}>
            <Text style={styles.item}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>R{dish.price}</Text>
        
            <Button title="Delete" onPress={() => deleteDish(dish.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FullMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5deb3',
    padding: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dishContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
