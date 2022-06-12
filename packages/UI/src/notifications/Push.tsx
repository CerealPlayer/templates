import { motion, useCycle, Variants } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { PushBody } from "./PushBody";

const variants: Variants = {
  open: {},
  closed: {},
};

export function Push({
  children,
  title,
  type,
}: {
  children: React.ReactNode;
  title: string;
  type: "info" | "error" | "success";
}) {
  const [isOpen, toggle] = useCycle(false, true);
  return (
    <motion.div
      initial={false}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      onClick={() => toggle()}
      whileHover={isOpen ? undefined : { cursor: "pointer" }}
      className="fixed bottom-8 left-8 z-20 rounded-md bg-blue-600 px-4 py-2 text-neutral-100 overflow-hidden"
    >
      <div className="flex rounded-md gap-2 items-center">
        {type === "info" && <BsInfoCircle size="1.2em" />}
        <h1 className="font-sans text-neutral-100 text-base">{title}</h1>
      </div>
      <PushBody>{children}</PushBody>
    </motion.div>
  );
}
