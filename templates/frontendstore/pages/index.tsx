import { readFile } from "fs/promises";
import type { products } from "../types/props";
import Hero from "../components/home/Hero";
import Products from "../components/functional/Products";
import { client } from "../utils/db";

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
  const fromDb = await client.query('SELECT * FROM products');
  console.log(fromDb)
  return {
    props: {
      products: products,
    },
  };
}
