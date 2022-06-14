import { ReactNode, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { CartContext } from "../../../context/cart-context";

export default function Badge({ children }: { children: ReactNode }) {
  const ctx = useContext(CartContext);
  const hasItem = ctx.items.length > 0;
  const controls = useAnimation();
  useEffect(() => {
    hasItem &&
      controls.start({
        y: [0, -10, 3],
        transition: {
          type: "spring",
          duration: 0.25,
          repeat: 1,
        },
      });
  });
  return (
    <div className="relative">
      {hasItem && (
        <motion.div
          animate={controls}
          className="absolute w-3 h-3 bg-[#8B7B64] rounded-full top-0 right-0"
        ></motion.div>
      )}
      {children}
    </div>
  );
}
