import DisplayCheckoutItem from "../components/checkout/DisplayCheckoutItem";
import UserData from "../components/checkout/form/UserData";
import Section from "../components/UI/containers/Section";
import { retrieveData } from "../helpers";
import { calcPrice, getCartInfo } from "../helpers/client";
import { useCart } from "../hooks/useCart";
import { products } from "../types/props";

export default function Checkout({ products }: { products: products }) {
  const { items } = useCart();
  const productsInCart = getCartInfo({ items, products });
  if (!productsInCart.some((item) => item !== null)) {
    return (
      <div className="flex justify-center items-center min-h-body">
        <h1>There was a problem rendering your checkout</h1>
      </div>
    );
  }
  const price = calcPrice(productsInCart);
  return (
    <Section>
      <div className="grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <UserData cart={productsInCart} />
        </div>
        <div className="lg:col-span-4">
          <h1>{price.toFixed(2)} $</h1>
          <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
            {productsInCart.map((item) => (
              <DisplayCheckoutItem key={"item-id-" + item.id} item={item!} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export async function getStaticProps() {
  const products = await retrieveData();
  return {
    props: {
      products,
    },
  };
}
