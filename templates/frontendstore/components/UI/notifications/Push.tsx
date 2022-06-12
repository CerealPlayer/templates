import { motion, useCycle, Variants } from "framer-motion";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

const variants: Variants = {
  open: {
    height: "auto",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  close: {
    height: "40px",
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function Push() {
  // const [isOpen, toggle] = useCycle(false, true);
  return (
    <motion.div
      // variants={variants}
      // animate={isOpen ? "open" : "close"}
      // onClick={() => toggle()}
      // whileHover={isOpen ? { scale: 1.1, cursor: "pointer" } : undefined}
      className="fixed cursor-pointer bottom-8 left-8 bg-blue-600 z-20 px-4 py-2 rounded-md text-neutral-100 shadow-md shadow-black"
    >
      <div className="flex mb-2 gap-2 items-center">
        <BsInfoCircle size="1.2em" />
        <h1 className="font-sans text-neutral-100 text-base">
          This site is a demo
        </h1>
      </div>
      {/* {isOpen && ( */}
      <div className="max-w-xs flex flex-col gap-1">
        <p className="text-sm">
          Created by{" "}
          <a
            href="https://www.jmoa.dev"
            rel="noreferrer"
            className="border-b border-rose-500 hover:border-b-4 transition-all duration-200 ease-out"
          >
            JMOA
          </a>{" "}
          to demonstrate how an eCommerce platform could be built.
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
        <p className="text-sm">
          You can test the checkout process with any future card expiration
          daye, any 3 digit CVV and the following card number:
        </p>
        <span
          className="text-sm flex gap-1 underline"
          onClick={() => navigator.clipboard.writeText("4242424242424242")}
        >
          4242 4242 4242 4242
          <AiOutlineCopy size="1.1em" />
        </span>
      </div>
      {/* )} */}
    </motion.div>
  );
}
