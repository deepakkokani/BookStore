import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/ThemeSlice";
import Login from "./login";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const navItem = (
    <>
      <li>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/course" onClick={() => setMenuOpen(false)}>
          Course
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-300 text-black"
      } px-5 md:px-20 py-4 fixed top-0 left-0 right-0 z-50 shadow-md`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">BookStore</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-4 text-sm font-semibold">{navItem}</ul>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded text-sm outline-none text-black w-40 md:w-56"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-2 py-2 bg-black text-white rounded-lg"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Login Button */}
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden mt-3 space-y-4 rounded-lg p-4 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } shadow-lg`}
        >
          <ul className="flex flex-col gap-3 text-base font-semibold">
            {navItem}
          </ul>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-3 py-2 w-full rounded-lg text-sm outline-none text-black"
            />
          </div>

          {/* Theme & Login */}
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="px-3 py-2 bg-black text-white rounded-lg"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Render login modal only once */}
      <Login />
    </div>
  );
};

export default NavBar;
