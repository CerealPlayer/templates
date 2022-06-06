import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import data from "../data/products.json";

export function useCart() {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items
    .filter((item) => item.id)
    .map((item) => data.filter((prod) => prod.id === item.id)[0]);
  const deleteItemHandler = (id: number): void => {
    const deleteIndex = cartItems.findIndex((item) => item.id === id);
    cartItems.splice(deleteIndex, 1);
    const nuIds = cartItems.map((item) => ({ id: item.id }));
    ctx.onSaveItems(nuIds);
  };
  return {
    cartItems,
    addItem: ctx.onAddItem,
    deleteItem: deleteItemHandler,
  };
}
