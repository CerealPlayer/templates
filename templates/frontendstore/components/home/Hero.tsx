import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <motion.div animate={{ rotateY: 70 }}>
          <Image
            alt="React"
            src="/techs/ReactLogo.svg"
            width={800}
            height={700}
          />
        </motion.div>
      </div>
    </section>
  );
}
