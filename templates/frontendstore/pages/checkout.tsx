import DisplayItem from "../components/cart/DisplayItem";
import Section from "../components/UI/Section";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cartItems, deleteItem } = useCart();
  return (
    <Section>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1>18.10 $</h1>
          <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
            {cartItems.map((item) => (
              <DisplayItem item={item} onDeleteItem={deleteItem} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
