import Image from "next/image";
export default function ProductInfo() {
  return (
    <main className="xl:mr-72 my-8">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-16">
        <div className="w-full max-w-3xl">
          <Image
            src="/techs/ReactLogo.svg"
            width={500}
            height={490}
            alt="Image of the article"
            layout="responsive"
          />
        </div>
        <article className="p-4 xl:p-16 w-full max-w-2xl mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <h1>React</h1>
              <h2>Not just a library</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              atque eos unde aspernatur ducimus commodi dolorem obcaecati
              tenetur, fuga vitae eius cum, quod molestiae? Cumque obcaecati
              cupiditate ipsum facilis fugiat.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
