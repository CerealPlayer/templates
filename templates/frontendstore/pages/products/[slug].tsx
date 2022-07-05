import { readFile } from "fs/promises";
import { useRouter } from "next/router";
import BoughtTogether from "../../components/product-detail/BoughtTogether";
import ProductInfo from "../../components/product-detail/ProductInfo";
import { retrieveData } from "../../helpers";
import { products } from "../../types/props";

export default function ProductDetail({ products }: { products: products }) {
  const { query } = useRouter();
  const { slug } = query;
  if (!products) {
    return null;
  }
  const currentItem = products.find((product) => product.name.toLowerCase() === slug);
  if (!currentItem) {
    return (
      <div className="flex justify-center items-center min-h-body">
        <h1>No item with this name exists. Yet.</h1>
      </div>
    );
  }
  return (
    <>
      <ProductInfo item={currentItem} />
      <BoughtTogether />
    </>
  );
}

export async function getStaticPaths() {
  const products = await retrieveData();
  const allNames = products.map((product) => product.name);
  const paths = allNames.map((name) => ({ params: { slug: name } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const products = await retrieveData();
  return {
    props: {
      products: products,
    },
  };
}
