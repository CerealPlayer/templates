import { products } from "../../types/props";
import Section from "../UI/Section";
import Checkout from "./Checkout";
import ItemsDisplay from "./ItemsDisplay";

export default function CartContainer({ products }: { products: products }) {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-8 md:flex-row">
        <ItemsDisplay products={products} />
        <Checkout />
      </div>
    </Section>
  );
}
