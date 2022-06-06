import Image from "next/image";

export default function Checkout() {
  return (
    <main>
      <div>
        <div>
          <h1>18.10 $</h1>
          <div>
            <div className="flex gap-16 justify-between items-center last-of-type:border-none py-2 border-b border-slate-300">
              <div className="flex items-center gap-4 md:gap-8">
                <div>
                  <Image
                    alt="Image of the article"
                    src="/techs/Reactlogo.svg"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col items-start md:gap-2">
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
