import { useCycle, motion, Variants } from "framer-motion";
import ToggleBtn from "./ToggleBtn";

const menuBgVariants: Variants = {
  open: {
    clipPath: "circle(2000px at calc(100% - 45px) 24px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(20px at calc(100% - 45px) 24px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu() {
  const [isOpen, toggleIsOpen] = useCycle(false, true);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="md:hidden flex items-center justify-center"
    >
      <motion.div className="absolute top-0 right-0 z-20 bottom-0 w-full bg-neutral-100" variants={menuBgVariants}></motion.div>
      <ToggleBtn toggle={() => toggleIsOpen()} />
    </motion.div>
  );
}
