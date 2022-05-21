import { ReactNode, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { CartContext } from "../../../context/cart-context";

export default function Badge({ children }: { children: ReactNode }) {
  const ctx = useContext(CartContext);
  const controls = useAnimation();
  useEffect(() => {
    if (ctx.items.length > 0) {
      controls.start({
        y: [0, -10, 5, 0],
        transition: {
          type: "spring",
          duration: 0.5,
          repeat: 2,
          repeatDelay: 0.2,
        },
      });
    }
  }, [ctx]);
  return (
    <div className="relative">
      <motion.div
        animate={controls}
        className="absolute w-3 h-3 bg-[#8B7B64] rounded-full top-0 right-0"
      ></motion.div>
      {children}
    </div>
  );
}
