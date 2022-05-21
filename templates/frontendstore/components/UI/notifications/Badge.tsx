import { ReactNode, useEffect, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CartContext } from "../../../context/cart-context";

export default function Badge({ children }: { children: ReactNode }) {
  const [hasItem, setHasItem] = useState(false);
  const ctx = useContext(CartContext);
  const controls = useAnimation();
  useEffect(() => {
    if (ctx.items.length > 0) {
      setHasItem(true);
    } else {
      setHasItem(false);
    }
    hasItem &&
      controls.start({
        y: [0, -10, 3],
        transition: {
          type: "spring",
          duration: 0.25,
          repeat: 1,
        },
      });
  }, [ctx, hasItem]);
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
