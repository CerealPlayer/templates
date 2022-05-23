import Image from "next/image";
import { products, ArrayElement } from "../../types/props";
import { MdOutlineDelete } from "react-icons/md";

export default function DisplayItem({
  item,
  onDeleteItem,
}: {
  item: ArrayElement<products>;
  onDeleteItem: (id: number) => void;
}) {
  const clickHandler = () => {
    onDeleteItem(item.id);
  };
  return (
    <div className="flex gap-16 justify-between items-center last-of-type:border-none py-2 border-b border-slate-300">
      <div className="flex items-center gap-4 md:gap-8">
        <div>
          <Image alt="Image of the article" src={item.src} width={70} height={70} />
        </div>
        <div className="flex flex-col items-start md:gap-2">
          <h3>{item.name}</h3>
          <p>{item.short_desc}</p>
        </div>
      </div>
      <div
        onClick={clickHandler}
        className="bg-red-200 rounded-full p-1 cursor-pointer"
      >
        <MdOutlineDelete size="1.5em" color="#BE123C" />
      </div>
    </div>
  );
}
