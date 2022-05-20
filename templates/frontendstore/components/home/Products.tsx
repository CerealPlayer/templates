import { products } from "../../types/props";
import ProductCard from "../UI/ProductCard";

export default function Products({ products }: { products: products }) {
  return (
    <section className=" w-11/12 max-w-5xl mx-auto my-32">
      <div className="border-b-2 border-neutral-500 py-2">
        <span>Browse our products</span>
      </div>
      <div className="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {products.map((prod) => (
          <ProductCard
            key={prod.name}
            href={prod.href}
            src={prod.src}
            title={prod.name}
            desc={prod.short_desc}
          />
        ))}
      </div>
    </section>
  );
}
