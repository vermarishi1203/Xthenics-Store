import { createContext, useContext, useReducer } from "react";
import { storeReducer } from "../storeReducer";
import { data } from "../data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const wishList = [];
  const cart = [];
  const [state, dispatch] = useReducer(storeReducer, { data, cart, wishList });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
