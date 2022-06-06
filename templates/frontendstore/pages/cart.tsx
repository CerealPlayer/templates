import CartContainer from "../components/cart/CartContainer";
import DisplayItem from "../components/cart/DisplayItem";
import GoToCheckout from "../components/cart/GoToCheckout";
import Section from "../components/UI/Section";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cartItems, saveItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <Section>
        <h1 className="text-center">
          Currently, you have 0 items on your cart
        </h1>
      </Section>
    );
  }
  const deleteItemHandler = (id: number): void => {
    const deleteIndex = cartItems.findIndex((item) => item.id === id);
    cartItems.splice(deleteIndex, 1);
    const nuIds = cartItems.map((item) => ({ id: item.id }));
    saveItems(nuIds);
  };
  return (
    <CartContainer>
      <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
        {cartItems.map((item) => (
          <DisplayItem item={item} onDeleteItem={deleteItemHandler} />
        ))}
      </div>
      <GoToCheckout />
    </CartContainer>
  );
}
