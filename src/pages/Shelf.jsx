import React from "react";
import { motion } from "framer-motion";
import { formatSectionBackground } from "../utils/theming";
import { useSelector } from "react-redux";

const Shelf = () => {
    const theme = useSelector((state) => state.theme.value);
  return (
    <motion.div
      className={` rounded-t-2xl h-screen flex flex-col items-center mt-2 ${formatSectionBackground(theme)}`}
      initial={{ y: 24, opacity: 0.4 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 24 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      Personal Book Shelf
    </motion.div>
  );
};

export default Shelf;
