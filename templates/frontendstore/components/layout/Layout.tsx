import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Push, PushTitle, PushBody } from "ui";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Push>
        <PushTitle>
          <BsInfoCircle size="1.2em" />
          <h1 className="font-sans text-neutral-100 text-base">
            This site is a demo
          </h1>
        </PushTitle>
        <PushBody>
          <p className="text-sm">
            Created by{" "}
            <a
              href="https://www.jmoa.dev"
              rel="noreferrer"
              className="border-b border-rose-500 hover:border-b-4 transition-all duration-200 ease-out"
            >
              Juan Olivas
            </a>{" "}
          </p>
          <p className="text-sm">
            You can find the repo{" "}
            <a
              href="https://github.com/CerealPlayer/templates/tree/main/templates/frontendstore"
              rel="noreferrer"
              className="border-b border-rose-500 hover:border-b-4 transition-all duration-200 ease-out"
            >
              here
            </a>
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
          <p className="text-sm">Test the checkout. Card number:</p>
          <span
            className="text-sm flex gap-1 underline cursor-pointer"
            onClick={() => navigator.clipboard.writeText("4242424242424242")}
          >
            4242 4242 4242 4242
            <AiOutlineCopy size="1.1em" />
          </span>
          <p className="text-sm">Any future expiration date, any 3 digit CVV</p>
        </PushBody>
      </Push>
      <Footer />
    </>
  );
}
