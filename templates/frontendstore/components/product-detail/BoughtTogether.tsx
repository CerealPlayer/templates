import ProductCard from "../UI/ProductCard";

export default function BoughtTogether() {
  return (
    <section className="w-11/12 max-w-5xl mx-auto my-16">
      <h2 className="mb-4">Frequently bought with</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
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
