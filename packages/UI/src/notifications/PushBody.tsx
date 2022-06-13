import { motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export function PushBody({
  children,
  isOpen,
  contentRef,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  contentRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={contentRef}
      variants={variants}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      className="flex flex-col gap-1 absolute"
    >
      {children}
    </motion.div>
  );
}
