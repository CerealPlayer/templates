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

export function Push({ children }: { children: React.ReactNode }) {
  // const [isOpen, toggle] = useCycle(false, true);
  return (
    <motion.div
      // variants={variants}
      // animate={isOpen ? "open" : "close"}
      // onClick={() => toggle()}
      // whileHover={isOpen ? { scale: 1.1, cursor: "pointer" } : undefined}
      className="fixed bottom-8 left-8 bg-blue-600 z-20 px-4 py-2 rounded-md text-neutral-100 shadow-md shadow-black"
    >
      {children}
    </motion.div>
  );
}
