import ProductCard from "../UI/ProductCard";
import Separator from "../UI/Separator";

export default function BoughtTogether() {
  return (
    <section className="w-11/12 max-w-xl lg:max-w-7xl mx-auto my-16">
      <Separator>Frequently bought with</Separator>
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
    </section>
  );
}
