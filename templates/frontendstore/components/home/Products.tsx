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
          href="products/react"
          src="/techs/ReactLogo.svg"
          title="React"
          desc="Everybody loves (hates) it"
        />
        <ProductCard
          href="products/angular"
          src="/techs/angularlogo.svg"
          title="Angular"
          desc="What else do you need"
        />
        <ProductCard
          href="products/vue"
          src="/techs/vuelogo.svg"
          title="Vue"
          desc="The cool kid"
        />
        <ProductCard
          href="products/svelte"
          src="/techs/sveltelogo.svg"
          title="Svelte"
          desc="The next rockstar"
        />
        <ProductCard
          href="products/lit"
          src="/techs/litlogo.svg"
          title="Lit"
          desc="You should check it out"
        />
        <ProductCard
          href="products/solid"
          src="/techs/solidlogo.svg"
          title="Solid"
          desc="Doing things right"
        />
      </div>
    </section>
  );
}
