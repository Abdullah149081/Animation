import { motion } from "framer-motion";

const Animation1 = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 180 }}
      transition={{
        repeat: 5,
        repeatType: "reverse",
        duration: 2,
      }}
      className="size-32 rounded bg-lime-600 p-3"
    >
      <h1>This is AnimationVariant component</h1>
    </motion.div>
  );
};

export default Animation1;
