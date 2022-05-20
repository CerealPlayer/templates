import { useState } from "react";
import { products } from "../../types/props";
import ProductCard from "../UI/ProductCard";
import Section from "../UI/Section";
import Separator from "../UI/Separator";
import Filter from "./Filter";

export default function Products({ products }: { products: products }) {
  const [filterOpen, setFilterOpen] = useState(false);

  const open = () => setFilterOpen(true);
  const close = () => setFilterOpen(false);
  return (
    <Section>
      <Separator>
        <div className="flex justify-between gap-4">
          <span>Browse our products</span>
          <div
            className="cursor-pointer"
            onClick={() => (filterOpen ? close() : open())}
          >
            <span>Filter</span>
          </div>
        </div>
      </Separator>
      {filterOpen && <Filter />}
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
