import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { products } from "../../types/props";
import DisplayItem from "./DisplayItem";

export default function ItemsDisplay({ products }: { products: products }) {
  const ctx = useContext(CartContext);
  const items = ctx.items;
  const itemsInfo = items
    .filter((item) => item.id)
    .map((item) => products.filter((prod) => prod.id === item.id)[0]);

  if (itemsInfo.length === 0) {
    return (
      <h1 className="text-center">Currently, you have 0 items on your cart</h1>
    );
  }
  const deleteItemHandler = (id: number): void => {
    const deleteIndex = itemsInfo.findIndex((item) => item.id === id);
    itemsInfo.splice(deleteIndex, 1);
    const nuIds = itemsInfo.map((item) => ({ id: item.id }));
    ctx.onSaveItems(nuIds);
  };
  return (
    <div className="border lg:col-span-6 border-slate-300 px-4 py-2 flex flex-col gap-4">
      {itemsInfo.map((item) => (
        <DisplayItem item={item} onDeleteItem={deleteItemHandler} />
      ))}
    </div>
  );
}
