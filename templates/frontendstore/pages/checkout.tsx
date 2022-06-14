import DisplayCheckoutItem from "../components/checkout/DisplayCheckoutItem";
import UserData from "../components/checkout/form/UserData";
import Section from "../components/UI/Section";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cartItems } = useCart();
  return (
    <Section>
      <div className="grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <UserData />
        </div>
        <div className="lg:col-span-4">
          <h1>18.10 $</h1>
          <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
            {cartItems.map((item) => (
              <DisplayCheckoutItem item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
