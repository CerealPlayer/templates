import { createContext, useState, ReactNode } from "react";

export const CartContext = createContext({
  items: [{ id: 0 }],
  onAddItem: (item: { id: number }) => {},
  onSaveItems: (item: { id: number }[]) => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<{ id: number }[]>([]);

  const addItemsHandler = (item: { id: number }) => {
    setItems((prev) => [...prev, item]);
  };
  const saveItemsHandler = (items: { id: number }[]) => {
    setItems(items);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        onAddItem: addItemsHandler,
        onSaveItems: saveItemsHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
