import { readFile } from "fs/promises";
import CartContainer from "../components/cart/CartContainer";
import { products } from "../types/props";

export default function Cart({ products }: { products: products }) {
  return (
    <main>
      <CartContainer products={products} />
    </main>
  );
}

export async function getStaticProps() {
  const data = await readFile("./data/products.json");
  const products = JSON.parse(data.toString());
  return {
    props: {
      products: products,
    },
  };
}
