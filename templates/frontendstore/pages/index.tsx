import { readFile } from "fs/promises";
import type { products } from "../types/props";
import Hero from "../components/home/Hero";
import Products from "../components/functional/Products";

export default function Web({ products }: { products: products }) {
  return (
    <>
      <Hero />
      <Products products={products} />
    </>
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
