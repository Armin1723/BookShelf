import React from "react";
import { formatBackground } from "./utils/theming";

import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shelf from "./pages/Shelf";
import Home from "./pages/Home";

const App = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <BrowserRouter>
      <div
        className={`${formatBackground(
          theme
        )} box min-h-screen backdrop-blur-lg w-scren font-[inter]`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Shelf />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
