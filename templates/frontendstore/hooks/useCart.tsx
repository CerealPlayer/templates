import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export function useCart() {
  const { items, onSaveItems, onAddItem } = useContext(CartContext);
  const deleteItemHandler = (id: number): void => {
    const deleteIndex = items.findIndex((item) => item.id === id);
    const nuItems = [...items];
    nuItems.splice(deleteIndex, 1);
    onSaveItems(nuItems);
  };
  return {
    items,
    addItem: onAddItem,
    deleteItem: deleteItemHandler,
  };
}
