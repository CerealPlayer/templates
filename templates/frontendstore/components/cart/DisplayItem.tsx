import Image from "next/image";
import { products, ArrayElement } from "../../types/props";
import { MdClose } from "react-icons/md";
import { ChangeEventHandler } from "react";
import { useState } from "react";

export default function DisplayItem({
  item,
  onDeleteItem,
}: {
  item: ArrayElement<products>;
  onDeleteItem: (id: number) => void;
}) {
  const [qt, setQt] = useState(1);
  const clickHandler = () => {
    onDeleteItem(item.id);
  };
  const qtHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setQt(parseInt(e.target.value));
  };
  const basePrice = item.price.toFixed(2);
  return (
    <div className="flex gap-4 md:gap-16 justify-between items-center last-of-type:border-none py-2 border-b border-slate-300">
      <div className="flex items-start justify-between w-full">
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
            <div className="text-sm text-slate-600 flex gap-1">
              <span>Qt</span>
              <select onChange={qtHandler} className="bg-slate-200">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start">
          <span>{(parseFloat(basePrice) * qt).toFixed(2)} $</span>
          {qt > 1 && <span className="text-sm">{basePrice} $ per unit</span>}
        </div>
      </div>
      <div
        onClick={clickHandler}
        className="bg-slate-200 rounded-full p-1 cursor-pointer"
      >
        <MdClose />
      </div>
    </div>
  );
}
