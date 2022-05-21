import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export default function Cart() {
  const ctx = useContext(CartContext);
  return (
    <main>
      {ctx.items.map((item) => (
        <span>{item.id}</span>
      ))}
    </main>
  );
}
