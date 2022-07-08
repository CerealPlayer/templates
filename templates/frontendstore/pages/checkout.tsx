import DisplayCheckoutItem from "../components/checkout/DisplayCheckoutItem";
import UserData from "../components/checkout/form/UserData";
import Section from "../components/UI/containers/Section";
import { retrieveData } from "../helpers";
import { calcPrice } from "../helpers/client";
import { useCart } from "../hooks/useCart";
import { ArrayElement, products } from "../types/props";

export default function Checkout({ products }: { products: products }) {
  const { items } = useCart();
  const productsInCart = items
    .filter((item) => item.id)
    .map((item) => {
      if (!item) return null
      const product = products.find((product) => product.id === item.id);
      if (product) {
        return { ...product, qt: item.qt };
      } else return null;
    }) as (ArrayElement<products> & { qt: number })[];
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
          <UserData />
        </div>
        <div className="lg:col-span-4">
          <h1>{price.toFixed(2)} $</h1>
          <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
            {productsInCart.map((item) => (
              <DisplayCheckoutItem item={item!} />
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
