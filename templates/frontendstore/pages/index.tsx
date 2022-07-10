import { readFile } from "fs/promises";
import type { products } from "../types/props";
import Hero from "../components/home/Hero";
import Products from "../components/functional/Products";
import { pool } from "../utils/db";

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
  const { rows } = await pool.query('SELECT * FROM products');
  console.log(rows);
  return {
    props: {
      products: products,
    },
  };
}
