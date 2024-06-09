import React, { useState } from "react";
import audio from "../assets/bookmark.mp3";

const BookCard = ({ book, index, isShelf }) => {
  const bookmarkAudio = new Audio(audio);

  const bookmarks = localStorage.getItem("bookmarks")
    ? JSON.parse(localStorage.getItem("bookmarks"))
    : [];
  const [isBookmark, setIsBookmark] = useState(bookmarks.includes(book.title));

  const toggleBookmark = () => {
    if (isBookmark) {
      const newBookmarks = bookmarks.filter((item) => item !== book.title);
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      setIsBookmark(false);
    } else {
      const newBookmarks = [...bookmarks, book.title];
      bookmarkAudio.play();
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
      localStorage.setItem('books', JSON.stringify([...books, book]));
      setIsBookmark(true);
    }
  };
  return (
    <div
      key={index}
      className={` ${
        index === 0 && "border-t-0 -mt-2"
      } max-w-full px-4 py-2 border-b border-gray-500/70 text-left flex gap-2`}
    >
      <div className="index flex flex-col items-center justify-evenly">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-12 h-12 fill-slate-800"
        >
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
        </svg>
        <p className="font-semibold">{index + 1}</p>
      </div>
      <div className="details w-full">
        <p className="text-lg font-bold">"{book.title}"</p>
        <div className="otherDetails flex justify-between w-full gap-8">
          <div className="deets">
            <p className="text-sm font-light">
              <span className="font-semibold">Author: &nbsp;</span>
              {book.author_name ? book.author_name.join(", ") : "Unknown"}
            </p>
            <p className="text-sm font-light">
              <span className="font-semibold">Number of Editions: </span>
              {book.editions.numFound}
            </p>
          </div>
          <button
            className={`bookmark flex items-center justify-center ${isShelf && "hidden"}`}
            onClick={toggleBookmark}
          >
            {!isBookmark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-8 fill-slate-600"
              >
                <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-8 fill-slate-600"
              >
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
