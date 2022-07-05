import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { products } from "../../types/props";
import Section from "../UI/Section";
import GoToCheckout from "./GoToCheckout";
import ItemsDisplay from "./ItemsDisplay";

export default function CartContainer({ products }: { products: products }) {
  const ctx = useContext(CartContext);
  const items = ctx.items;
  const itemsInfo = items
    .filter((item) => item.id)
    .map((item) => products.filter((prod) => prod.id === item.id)[0]);

  if (itemsInfo.length === 0) {
    return (
      <div className="min-h-body flex justify-center items-center">
        <h1 className="text-center">
          Currently, you have 0 items on your cart
        </h1>
      </div>
    );
  }
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-8 md:flex-row">
        <ItemsDisplay itemsInfo={itemsInfo} onSaveItems={ctx.onSaveItems} />
        <GoToCheckout />
      </div>
    </Section>
  );
}
