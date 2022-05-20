import ProductCard from "../UI/ProductCard";
import Section from "../UI/Section";
import Separator from "../UI/Separator";

export default function BoughtTogether() {
  return (
    <Section>
      <Separator>
        <span>Frequently bought with</span>
      </Separator>
      <div className="grid justify-items-center mx-auto mt-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <ProductCard
          src="/techs/nextlogo.svg"
          title="Next"
          desc="The React full stack framework"
          href="/products/next"
        />
        <ProductCard
          src="/techs/reduxlogo.svg"
          title="Redux"
          desc="State manager for React"
          href="/products/redux"
        />
      </div>
    </Section>
  );
}
