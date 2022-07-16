import type { products } from "../types/props";
import Hero from "../components/home/Hero";
import Products from "../components/functional/Products";
import { getAllProducts } from "../utils/db";

export default function Web({ products }: { products: products }) {
  return (
    <>
      <Hero />
      <Products products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
  };
}
