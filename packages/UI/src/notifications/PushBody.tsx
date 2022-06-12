import { motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export function PushBody({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={variants} className="max-w-xs flex flex-col gap-1 absolute">
      {children}
    </motion.div>
  );
}
