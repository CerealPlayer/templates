import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { Push, ExtLink } from "ui";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Push type="info" title="This site is a demo">
        <NotificationBody />
      </Push>
      <main className="min-h-body">{children}</main>
      <Footer />
    </>
  );
}

const NotificationBody = () => (
  <>
    <p className="text-sm">
      Created by <ExtLink href="https://www.jmoa.dev">Juan Olivas</ExtLink>{" "}
    </p>
    <p className="text-sm">
      You can find the repo{" "}
      <ExtLink href="https://github.com/CerealPlayer/templates/tree/main/templates/frontendstore">
        here
      </ExtLink>
      .
    </p>
    <p className="text-sm">
      Go to{" "}
      <Link href="/admin">
        <a className="border-b border-rose-500 hover:border-b-4 transition-all duration-200 ease-out">
          this link
        </a>
      </Link>{" "}
      to check the admin page.
    </p>
    <p className="text-sm">Test the checkout with this card number:</p>
    <span
      className="text-sm flex gap-1 underline cursor-pointer"
      onClick={() => navigator.clipboard.writeText("4242424242424242")}
    >
      4242 4242 4242 4242
      <AiOutlineCopy size="1.1em" />
    </span>
    <p className="text-sm">any future exp date and any 3 digit CVV</p>
  </>
);
