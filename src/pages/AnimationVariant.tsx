import { motion } from "framer-motion";

const transition = {
  repeat: 5,
  repeatType: "reverse" as const,
  duration: 2,
  repeatInfinity: Infinity,
  ease: "linear",
};

const variants = {
  initial: { rotate: 0 },
  animate: { rotate: 180 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AnimationVariant = () => {
  return (
    <motion.div className="flex justify-center items-center gap-10 ">
      <motion.div
        className="size-40 rounded bg-indigo-500 p-3 flex justify-center items-center font-bold text-white text-center "
        variants={variants}
        initial="initial"
        animate="animate"
        transition={transition}
      >
        Animation Variant
      </motion.div>
      <motion.div
        className="size-56 rounded bg-indigo-500 p-3 flex justify-center items-center font-bold text-white text-center gap-4 flex-wrap "
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="bg-lime-500 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={item}
          className="bg-lime-500 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={item}
          className="bg-lime-500 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={item}
          className="bg-lime-500 size-20 rounded-sm"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimationVariant;
