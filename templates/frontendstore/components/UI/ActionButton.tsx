import { ReactNode } from "react";

export default function ActionButton({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  const style = primary
    ? "px-8 py-4 w-full rounded-lg hover:scale-105 transition-all duration-100 ease-out text-slate-50 font-bold bg-slate-700"
    : "px-8 w-full py-4 rounded-lg text-slate-50 font-bold bg-gray-500 hover:scale-105 transition-all duration-100 ease-out";
  return <button className={style}>{children}</button>;
}
