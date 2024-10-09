import React, { createContext, useState, ReactNode } from 'react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface DishContextType {
  dishes: Dish[];
  addDish: (dish: Dish) => void;
  deleteDish: (id: number) => void;
}

export const DishContext = createContext<DishContextType | undefined>(undefined);

export const DishProvider = ({ children }: { children: ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prevDishes) => [...prevDishes, dish]);
  };

  const deleteDish = (id: number) => {
    setDishes((prevDishes) => prevDishes.filter(dish => dish.id !== id));
  };

  return (
    <DishContext.Provider value={{ dishes, addDish, deleteDish }}>
      {children}
    </DishContext.Provider>
  );
};
