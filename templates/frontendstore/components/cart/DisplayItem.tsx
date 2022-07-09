import Image from "next/image";
import { products, ArrayElement } from "../../types/props";
import { MdClose } from "react-icons/md";
import { ChangeEventHandler } from "react";

export default function DisplayItem({
  name,
  src,
  price,
  id,
  qt,
  onDeleteItem,
  addItem,
}: {
  name?: string;
  src?: string;
  price?: number;
  id?: number;
  qt: number;
  onDeleteItem: (id: number) => void;
  addItem: (id: number, qt: number) => void;
}) {
  if (!name || !src || !price || !id) {
    return null;
  }
  const deleteHandler = () => {
    onDeleteItem(id);
  };
  const qtHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    addItem(id, parseInt(e.target.value));
  };
  const basePrice = price.toFixed(2);
  return (
    <div className="flex gap-4 md:gap-16 justify-between items-center last-of-type:border-none py-2 border-b border-slate-300">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-4 md:gap-8">
          <div>
            <Image
              alt="Image of the article"
              src={src}
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start md:gap-2">
            <h3>{name}</h3>
            <div className="text-sm text-slate-600 flex gap-1">
              <span>Qt</span>
              <select onChange={qtHandler} value={qt} className="bg-slate-200">
                {Array.from(Array(10), (_, x) => x + 1).map((n) => (
                  <option key={"Option - " + n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start">
          <span className="font-bold">
            {(parseFloat(basePrice) * qt).toFixed(2)} $
          </span>
          {qt > 1 && <span className="text-sm">{basePrice} $ per unit</span>}
        </div>
      </div>
      <div
        onClick={deleteHandler}
        className="bg-slate-200 rounded-full p-1 cursor-pointer"
      >
        <MdClose />
      </div>
    </div>
  );
}
