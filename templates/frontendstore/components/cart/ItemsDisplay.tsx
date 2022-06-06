import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { products } from "../../types/props";
import DisplayItem from "./DisplayItem";

export default function ItemsDisplay({
  itemsInfo,
  onSaveItems,
}: {
  itemsInfo: products;
  onSaveItems: (
    item: {
      id: number;
    }[]
  ) => void;
}) {
  const deleteItemHandler = (id: number): void => {
    const deleteIndex = itemsInfo.findIndex((item) => item.id === id);
    itemsInfo.splice(deleteIndex, 1);
    const nuIds = itemsInfo.map((item) => ({ id: item.id }));
    onSaveItems(nuIds);
  };
  return (
    <div className="border rounded-xl lg:col-span-6 border-slate-300 px-4 py-2 flex flex-col gap-4">
      {itemsInfo.map((item) => (
        <DisplayItem item={item} onDeleteItem={deleteItemHandler} />
      ))}
    </div>
  );
}
