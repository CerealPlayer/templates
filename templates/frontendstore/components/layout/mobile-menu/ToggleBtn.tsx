import { motion } from "framer-motion";

export default function ToggleBtn({ toggle }: { toggle: any }) {
  return (
    <button className="absolute z-30 right-8 top-4" onClick={toggle}>
      <motion.path>
        
      </motion.path>
    </button>
  );
}
