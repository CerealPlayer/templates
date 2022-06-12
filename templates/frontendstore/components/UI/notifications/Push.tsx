import { motion, useCycle } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";

export default function Push() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="fixed cursor-pointer bottom-8 left-8 bg-blue-600 z-20 px-4 py-2 rounded-md text-neutral-100 flex gap-2 items-center shadow-md shadow-black"
    >
      <BsInfoCircle size="1.2em" />
      <h1 className="font-sans text-neutral-100 text-base">
        This site is a demo
      </h1>
    </motion.div>
  );
}
