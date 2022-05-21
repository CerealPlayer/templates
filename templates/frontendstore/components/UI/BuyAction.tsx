import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import ActionButton from "./ActionButton";

export default function BuyAction() {
  const ctx = useContext(CartContext);
  const cartHandler = () => {
    ctx.onAddItem({ id: 1 });
  };
  return (
    <>
      <aside className="mx-auto w-full lg:col-span-3 border-2 rounded-xl p-4 border-slate-400">
        <div className="flex justify-end">
          <span className="text-3xl text-slate-200 font-bold bg-slate-600 py-1 px-2 rounded-md">
            18.10 €
          </span>
        </div>
        <div className="my-8">
          <h3>Includes</h3>
          <ul className=" text-slate-600 list-disc list-outside pl-4">
            <li>Huge community</li>
            <li>Thousands of librarys that will make your job easier</li>
            <li>Hooks</li>
            <li>Backed by Facebook</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <ActionButton primary onClick={cartHandler}>
            Add to cart
          </ActionButton>
          <ActionButton>Add to wishlist</ActionButton>
        </div>
        <p className="my-4">
          <span className="font-bold">Return policy:</span> Eligible for return
          within 30 days of receipt
        </p>
      </aside>
    </>
  );
}
