import Image from "next/image";
import ProductCard from "../UI/ProductCard";

export default function Products() {
  return (
    <section className=" w-11/12 max-w-5xl mx-auto my-32">
      <div className="border-b-2 border-neutral-500 py-2">
        <span>Browse our products</span>
      </div>
      <div className="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        <ProductCard
          href=""
          src="/techs/ReactLogo.svg"
          title="React"
          desc="Everybody loves (hates) it"
        />
        <ProductCard
          href=""
          src="/techs/angularlogo.svg"
          title="Angular"
          desc="What else do you need"
        />
        <ProductCard
          href=""
          src="/techs/vuelogo.svg"
          title="Vue"
          desc="The cool kid"
        />
      </div>
    </section>
  );
}
