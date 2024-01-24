import { motion } from "framer-motion";
import { useRef } from "react";

const buttonVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 1 },
  },
  tap: { scale: 0.9 },
  dragStyle: {
    scale: 0.7,
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    backgroundColor: "#a855f7",
  },
};

const Gesture = () => {
  const constraintsRef = useRef(null);
  return (
    <div ref={constraintsRef} className="max-w-7xl mx-auto  ">
      <motion.div
        dragConstraints={constraintsRef}
        initial="hidden"
        animate="show"
        whileTap="tap"
        whileHover="hover"
        variants={buttonVariants}
        drag
        dragElastic={0.3}
        whileDrag={buttonVariants.dragStyle}
        className="size-56 rounded bg-indigo-500 p-3 "
      ></motion.div>
    </div>
  );
};

export default Gesture;
