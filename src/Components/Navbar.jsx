import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    const isActive = location.pathname === "/me"
    
  return (
    <div className={`navbar flex p-3 justify-between items-center backdrop-blur-lg sticky top-0 z-[10] `}>
      <div className="navRight">
        <Link to="/" className="text-3xl font-extrabold title font-[helvetica]">
          BookShelf
        </Link>
      </div>
      <div className="nav-left flex items-center gap-4">
        <Link to="/me">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`w-8 h-8 ${isActive ? 'fill-slate-950' : 'fill-slate-400 stroke-black hover:fill-slate-600' }`}>
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
        </Link>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
