import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../pages/Home/Coffees/CoffeesItems";

interface ItemProps {
  amount: number;
  coffee: CoffeeType;
}

interface CartContextType {
  cartList: ItemProps[];
  addItemsToCart: (itemToAdd: ItemProps) => void;
  removeItemFromCart: (coffeeName: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<ItemProps[]>([]);
  console.log(cartList);

  function addItemsToCart(itemToAdd: ItemProps) {
    const isCoffeeAlreadyInCart =
      cartList.findIndex(
        (item) => item.coffee.name === itemToAdd.coffee.name
      ) != -1;

    if (isCoffeeAlreadyInCart) {
      let listWithChangedOne = cartList.map(item => {
        if(item.coffee.name === itemToAdd.coffee.name){
          return itemToAdd;
        }
        return item;
      });
      
      setCartList(listWithChangedOne);
    }else{
      setCartList([...cartList, itemToAdd])
    }
  }

  function removeItemFromCart(coffeeName: string) {
    let cartListWithoutRemovedOne = cartList.filter(item => item.coffee.name !== coffeeName);
    setCartList(cartListWithoutRemovedOne)
  }

  return (
    <CartContext.Provider
      value={{ cartList, addItemsToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
