import Image from "next/image";
import { ArrayElement, products } from "../../types/props";

export default function DisplayCheckoutItem({
  item,
}: {
  item: ArrayElement<products>;
}) {
  const basePrice = item.price.toFixed(2);
  return (
    <div className="flex gap-4 md:gap-16 justify-between items-center last-of-type:border-none py-2 border-b border-slate-300">
      <div className="flex items-center gap-4 md:gap-8">
        <div>
          <Image
            alt="Image of the article"
            src={item.src}
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col items-start md:gap-2">
          <h3>{item.name}</h3>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start">
        <span className="font-bold text-slate-800">{basePrice} $</span>
      </div>
    </div>
  );
}
