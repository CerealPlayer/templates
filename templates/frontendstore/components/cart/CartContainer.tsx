import { products } from "../../types/props";
import Section from "../UI/Section";
import ItemsDisplay from "./ItemsDisplay";

export default function CartContainer({ products }: { products: products }) {
  return (
    <Section>
      <div>
        <ItemsDisplay products={products} />
      </div>
    </Section>
  );
}
