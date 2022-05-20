import { products } from "../../types/props";
import ProductCard from "../UI/ProductCard";
import Section from "../UI/Section";
import Separator from "../UI/Separator";

export default function Products({ products }: { products: products }) {
  return (
    <Section>
      <Separator>Browse our products</Separator>
      <div className="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
    </Section>
  );
}
