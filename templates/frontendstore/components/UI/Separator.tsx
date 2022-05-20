import { ReactNode } from "react";

export default function Separator({ children }: { children: ReactNode }) {
  return <div className="border-b-2 border-neutral-500 py-2">{children}</div>;
}
