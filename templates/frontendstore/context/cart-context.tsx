import { createContext, useState, ReactNode } from "react";

type cartItem = { id: number; qt: number };

export const CartContext = createContext({
  items: [{ id: 0, qt: 0 }],
  onAddItem: (id: number, qt: number) => {},
  onSaveItems: (item: cartItem[]) => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<cartItem[]>([]);

  const addItemsHandler = (id: number, qt: number) => {
    setItems((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id);
      if (itemIndex === -1) return [...prev, { id, qt: 1 }];
      const copyState = [...prev];
      copyState[itemIndex].qt = qt;
      return copyState;
    });
  };
  const saveItemsHandler = (items: cartItem[]) => {
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
