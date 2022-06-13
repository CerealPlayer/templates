import { motion, useCycle, Variants } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { PushBody } from "./PushBody";
import { useRef } from "react";
import { useDimensions } from "hooks";

const variants: Variants = {
  open: (height) => ({
    height: height + 48,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
  closed: {
    height: 40,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

interface includesOffset extends HTMLDivElement {
  offsetWidth: number;
  offsetHeight: number;
}

export function Push({
  children,
  title,
  type,
}: {
  children: React.ReactNode;
  title: string;
  type: "info" | "error" | "success";
}) {
  const [isOpen, toggle] = useCycle(false, true);
  const contentRef = useRef<includesOffset>(null);
  const { height } = useDimensions(contentRef);
  return (
    <motion.div
      initial={false}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      style={{ opacity: height ? 1 : 0 }}
      custom={height}
      className="fixed bottom-8 left-8 max-w-xs z-20 rounded-md bg-blue-600 px-4 py-2 text-neutral-100 overflow-hidden"
    >
      <div
        onClick={() => toggle()}
        className="flex gap-2 mb-2 items-center cursor-pointer"
      >
        {isOpen && <MdClose size="1.2em" />}
        {!isOpen && type === "info" && <BsInfoCircle size="1.2em" />}
        <h1 className="font-sans text-neutral-100 text-base">{title}</h1>
      </div>
      <PushBody isOpen={isOpen} contentRef={contentRef}>
        {children}
      </PushBody>
    </motion.div>
  );
}
