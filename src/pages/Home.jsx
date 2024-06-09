import React, { useState } from "react";
import { motion } from "framer-motion";
import { formatSectionBackground } from "../utils/theming";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  const [bookName, setBookName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [isResultsLoading, setIsResultsLoading] = useState(false);

  const fetchSuggestions = async (e) => {
    setBookName(e.target.value);
    setResults([]);
    try {
      if (bookName.length > 2) {
        setIsLoading(true);
        // fetch suggestions
        const result = await fetch(
          `https://openlibrary.org/search.json?title=${bookName}&fields=title&limit=5&page=1`
        ).then((res) => res.json());
        if (result.numFound === 0) {
          setSuggestions([{ title: "No results found", noResults: true}]);
        }
        else setSuggestions(result.docs);
        setIsLoading(false);
      } else if (bookName.length <= 1) {
        setSuggestions([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchResults = async (bookName) => {
    setIsResultsLoading(true);
    try {
      // fetch results
      const data = await fetch(
        `https://openlibrary.org/search.json?title=${bookName}&fields=key,title,author_name,editions&limit=10&page=1`
      ).then((res) => res.json());
      setResults(data.docs);
      setIsResultsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

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
      <div className="md:text-[7vw] text-[14vw] font-extralight px-8 max-sm:px-14">
        Book Shelf
      </div>
      <p className="text-lg font-extralight max-w-[80vw] leading-4 text-opacity-80 text-center">
        Your one stop solution to find details on any kind of book and save it
        for later.
      </p>
      <div className="searchBar flex flex-col gap-0 py-4 ">
        <div className="flex">
          <input
            type="text"
            name="bookName"
            id="bookName"
            value={bookName}
            onChange={(e) => fetchSuggestions(e)}
            className="border-2 rounded-l-xl border-gray-500/70 bg-inherit focus:border-0 ring-0 ring-none p-2 w-[70vw] md:w-[50vw] "
          />
          <button disabled={results.length > 0} className="flex items-center border-2 border-gray-500/70 bg-inherit border-l-0 rounded-r-xl px-2 hover:bg-gray-300/40">
            Search
          </button>
        </div>

        {/* Suggestions */}
        {isLoading ? <p className="pl-4 py-2">Loading...</p> : (suggestions &&
          suggestions.map((suggestion, index) => (
            <button
              key={index}
              disabled={suggestion.noResults}
              onClick={()=>{
                setBookName(suggestion.title)
                fetchResults(bookName)
                setSuggestions([])
              }}
              className={` ${
                index === 0 && "border-t-0 -mt-1"
              } max-w-full px-4 py-2 border border-gray-500/70 ${!suggestion.noResults && 'hover:bg-gray-500/30'} text-left `}
            >
              {suggestion.title.length > 40 ? suggestion.title.slice(0, 40) + "..." : suggestion.title}
            </button>
          )))}

        {/* Results */}
        <div className="max-h-[40vh] md:max-w-[54vw] max-w-[85vw] overflow-auto">
        {isResultsLoading ? <p className="pl-4 py-2">Loading...</p> : (results &&
          results.map((result, index) => (
            <div
              key={index}
              className={` ${
                index === 0 && "border-t-0 -mt-2"
              } max-w-full px-4 py-2 border-b border-gray-500/70 text-left `}
            >
              <p className="text-lg font-bold">"{result.title}"</p>
              <p className="text-sm font-light">Author: &nbsp;
                {result.author_name ? result.author_name.join(", ") : "Unknown"}
              </p>
              <p className="text-sm font-light">Number of Editions: {result.editions.numFound}</p>
            </div>
          )))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
