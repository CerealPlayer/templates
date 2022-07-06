import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="w-11/12 max-w-xl lg:max-w-7xl mx-auto my-32">
      {children}
    </section>
  );
}
