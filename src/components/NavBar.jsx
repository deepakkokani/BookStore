import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (
    <>
      <li><a className="hover:text-blue-600 cursor-pointer">Home</a></li>
      <li><a className="hover:text-blue-600 cursor-pointer">Course</a></li>
      <li><a className="hover:text-blue-600 cursor-pointer">Contact</a></li>
      <li><a className="hover:text-blue-600 cursor-pointer">About</a></li>
    </>
  );

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-slate-300
        p-5 md:p-5
        transition-all duration-300 ease-in-out
        ${scrolled ? "shadow-md bg-base-200" : ""}
      `}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">BookStore</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5 text-sm font-semibold">
            {navItem}
          </ul>

          {/* Search Input */}
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded text-sm outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Theme Toggle */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" className="hidden theme-controller" value="synthwave" />
            {/* Sun Icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41..." />
            </svg>
            {/* Moon Icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
            </svg>
          </label>

          {/* Login Button */}
          <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition">
            Login
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-slate-300 p-4 rounded shadow-md">
          <ul className="flex flex-col gap-2 text-sm font-semibold">
            {navItem}
          </ul>
          <div className="relative mt-2">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded text-sm outline-none border border-gray-300 w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* You can add the theme toggle here for mobile too if you want */}
          <button className="w-full bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition mt-3">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
