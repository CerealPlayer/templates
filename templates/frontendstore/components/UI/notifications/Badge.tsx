import { ReactNode, useEffect, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CartContext } from "../../../context/cart-context";

export default function Badge({ children }: { children: ReactNode }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const ctx = useContext(CartContext);
  const controls = useAnimation();
  console.log(ctx);
  useEffect(() => {
    if (ctx.items.length >= 1) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    controls.start({
      y: [0, -10, 5, 0],
      transition: {
        type: "spring",
        duration: 0.3,
        repeat: 2,
        repeatDelay: 0.1,
      },
    });
  }, [ctx]);
  return (
    <div className="relative">
      {!isEmpty && (
        <motion.div
          animate={controls}
          className="absolute w-3 h-3 bg-[#8B7B64] rounded-full top-0 right-0"
        ></motion.div>
      )}
      {children}
    </div>
  );
}
