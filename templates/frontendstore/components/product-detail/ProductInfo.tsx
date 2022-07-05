import Image from "next/image";
import { ArrayElement, products } from "../../types/props";
import BuyAction from "../UI/BuyAction";
import Section from "../UI/Section";
export default function ProductInfo({
  item,
}: {
  item: ArrayElement<products>;
}) {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="w-full lg:max-w-full max-w-xl h-max bg-sky-900 p-4 rounded-xl mx-auto lg:col-span-5">
          <Image
            src={item.src}
            width={500}
            height={490}
            alt="Image of the article"
            layout="responsive"
          />
        </div>
        <article className="lg:py-8 lg:col-span-4 w-full mx-auto">
          <div className="mb-8">
            <h1>{item.name}</h1>
            <h2>Not just a library</h2>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            atque eos unde aspernatur ducimus commodi dolorem obcaecati tenetur,
            fuga vitae eius cum, quod molestiae? Cumque obcaecati cupiditate
            ipsum facilis fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            atque eos unde aspernatur ducimus commodi dolorem obcaecati tenetur,
            fuga vitae eius cum, quod molestiae? Cumque obcaecati cupiditate
            ipsum facilis fugiat.
          </p>
        </article>
        <BuyAction {...item} />
      </div>
    </Section>
  );
}
