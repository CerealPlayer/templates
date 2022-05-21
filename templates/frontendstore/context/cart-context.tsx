import { createContext, useState, ReactNode } from "react";

export const CartContext = createContext({
  items: [{ id: 0 }],
  onSaveItem: (item: { id: number }) => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<{ id: number }[]>([{ id: 0 }]);

  const saveItemsHandler = (item: { id: number }) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        onSaveItem: saveItemsHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
