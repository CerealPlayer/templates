import { ReactNode } from "react";

type props = { children: ReactNode; dis?: boolean };

export default function Button({ children, dis }: props) {
  return (
    <button
      disabled={dis}
      className="px-8 group py-2 relative flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full border-b border-neutral-500 scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out"></div>
      {children}
    </button>
  );
}
