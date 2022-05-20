import { readFile } from "fs/promises";
import Products from "../../components/functional/Products";
import type { products } from "../../types/props";

export default function ProducPage({ products }: { products: products }) {
  return <Products products={products} />;
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
