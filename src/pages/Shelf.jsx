import React from "react";
import { motion } from "framer-motion";
import { formatSectionBackground } from "../utils/theming";
import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

const Shelf = () => {
    const theme = useSelector((state) => state.theme.value);
    const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

  return (
    <motion.div
      className={` rounded-t-2xl min-h-screen flex flex-col items-center justify-start mt-2 pt-[10vh] ${formatSectionBackground(
        theme
      )}`}
      initial={{ y: 48, opacity: 0.2 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 48 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <p  className="md:text-[7vw] text-[12vw] font-extralight px-8 max-sm:px-10">Personal Shelf</p>
      <div>
        {books.length === 0 ? (
          <p className="text-2xl text-center">No books added yet</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 max-w-[90vw] md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <BookCard key={index} book={book} index={index} isShelf={true}/>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Shelf;
