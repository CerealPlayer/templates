import { useState } from "react";
import { MdOutlineAddShoppingCart, MdClose } from "react-icons/md";

export default function BuyFlow() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="absolute top-20 right-0 p-2 cursor-pointer m-4 rounded-full bg-slate-700 xl:hidden"
      >
        <MdOutlineAddShoppingCart size="1.5em" color="rgb(241 245 249)" />
      </div>
      <aside
        style={{ transform: isOpen ? "translateX(0)" : "" }}
        className="fixed bg-slate-100 translate-x-full xl:translate-x-0 right-0 shadow-lg rounded-l-xl transition-all duration-300 ease-out shadow-neutral-400 top-0 h-full sm:h-[70%] px-8 py-4 w-full sm:w-72 mt-24"
      >
        <div
          className="ml-auto w-max cursor-pointer xl:hidden"
          onClick={() => setIsOpen(false)}
        >
          <MdClose size="1.5em" />
        </div>
        <h2>React</h2>
        <div>
          <h3>Elige una opción</h3>
          <select>
            <option>18.1</option>
            <option>18</option>
            <option>17.0.2</option>
            <option>17.0.1</option>
          </select>
        </div>
      </aside>
    </>
  );
}
