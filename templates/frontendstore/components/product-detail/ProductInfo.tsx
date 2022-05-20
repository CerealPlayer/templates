import Image from "next/image";
import BuyAction from "../UI/BuyAction";
export default function ProductInfo() {
  return (
    <section className="my-8 w-11/12 max-w-xl xl:max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
      <div className="w-full xl:max-w-full max-w-xl h-max bg-sky-900 p-4 rounded-xl mx-auto xl:col-span-5">
        <Image
          src="/techs/ReactLogo.svg"
          width={500}
          height={490}
          alt="Image of the article"
          layout="responsive"
        />
      </div>
      <article className="xl:py-8 xl:col-span-4 w-full mx-auto">
        <div className="mb-8">
          <h1>React</h1>
          <h2>Not just a library</h2>
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta atque
          eos unde aspernatur ducimus commodi dolorem obcaecati tenetur, fuga
          vitae eius cum, quod molestiae? Cumque obcaecati cupiditate ipsum
          facilis fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta atque
          eos unde aspernatur ducimus commodi dolorem obcaecati tenetur, fuga
          vitae eius cum, quod molestiae? Cumque obcaecati cupiditate ipsum
          facilis fugiat.
        </p>
      </article>
      <BuyAction />
    </section>
  );
}
