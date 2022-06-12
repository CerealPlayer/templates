import { ReactNode } from "react";
import { Push } from "ui";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Push />
      <Footer />
    </>
  );
}
