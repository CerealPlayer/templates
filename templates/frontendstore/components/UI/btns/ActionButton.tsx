import { MouseEventHandler } from "react";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  primary?: boolean;
  type?: "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ActionButton({
  children,
  primary,
  type = "button",
  onClick,
}: props) {
  const style = primary
    ? "px-8 py-4 w-full rounded-lg hover:bg-[#2F405D] transition-all duration-100 ease-out text-slate-50 font-bold bg-slate-800"
    : "px-8 w-full py-4 rounded-lg text-slate-50 font-bold bg-gray-500 hover:bg-[#858C99] transition-all duration-100 ease-out";
  return (
    <button type={type} className={style} onClick={onClick}>
      {children}
    </button>
  );
}
