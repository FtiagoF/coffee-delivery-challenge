import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../pages/Home/Coffees/Coffee";

interface ItemsProps {
  amount: number;
  coffee: CoffeeType;
};

interface CartContextType {
  items: ItemsProps[];
  addItemsToCart: (el: any) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemsProps[]>([]);

  function addItemsToCart(el: ItemsProps) {
    setItems([...items, el]);
  }

  console.log(items);
  

  return (
    <CartContext.Provider value={{ items, addItemsToCart }}>
      {children}
    </CartContext.Provider>
  );
}
