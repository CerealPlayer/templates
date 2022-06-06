import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import data from "../data/products.json";

export function useCart() {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items
    .filter((item) => item.id)
    .map((item) => data.filter((prod) => prod.id === item.id)[0]);
  return { cartItems, addItem: ctx.onAddItem, saveItems: ctx.onSaveItems };
}
