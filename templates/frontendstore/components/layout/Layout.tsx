import { ReactNode } from "react";
import Push from "../UI/notifications/Push";
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
