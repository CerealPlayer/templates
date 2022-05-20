import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative group">
      <h1 className="text-center absolute top-1/3 md:top-1/2 right-1/2 z-10 translate-x-1/2 text-fuchsia-600 -translate-y-1/2 text-7xl group-hover:blur-3xl group-hover:opacity-0 transition-all duration-300 ease-in-out">
        Hot right now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center grayscale-[50%] group-hover:filter-none transition-all duration-600 ease-in-out">
        <div className="p-12 bg-sky-900 w-full flex justify-center col-span-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <Image
              alt="React"
              src="/techs/ReactLogo.svg"
              width={1100}
              height={1068}
              className="blur-sm group-hover:filter-none transition-all duration-700 ease-in-out scale-95"
            />
          </motion.div>
        </div>
        <div className="col-span-4 w-full h-full flex flex-col justify-around">
          <div className="p-12 bg-black flex justify-center items-center h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <Image
                src="/techs/next-black.svg"
                width={414}
                height={248}
                className="blur-sm group-hover:filter-none transition-all duration-700 ease-in-out"
              />
            </motion.div>
          </div>
          <div className="p-12 bg-violet-300 flex justify-center items-center h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <Image
                src="/techs/reduxlogo.svg"
                width={400}
                height={400}
                className="blur-sm group-hover:filter-none transition-all duration-700 ease-in-out"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
