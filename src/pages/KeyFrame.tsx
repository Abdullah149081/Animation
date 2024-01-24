import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: [300, -300, 300],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
    },
  },
};

const KeyFrame = () => {
  return (
    <div className="flex justify-center items-center gap-10 ">
      <motion.div
        className="size-56 rounded bg-indigo-500 p-3 flex justify-center items-center font-bold text-white text-center gap-4 flex-wrap "
        variants={container}
        initial="hidden"
        animate="show"
      ></motion.div>
    </div>
  );
};

export default KeyFrame;
