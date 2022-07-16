import Products from "../../components/functional/Products";
import type { products } from "../../types/props";
import { getAllProducts } from "../../utils/db";

export default function ProducPage({ products }: { products: products }) {
  return <Products products={products} />;
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
  };
}
