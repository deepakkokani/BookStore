import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Home from "../home/home";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="bg-slate-300 px-5 md:px-20 py-5 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">BookStore</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5 text-sm font-semibold">{navItem}</ul>

          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded text-sm outline-none"
            />
          </div>

          <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600">
            Login
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-slate-200 p-4 rounded shadow">
          <ul className="flex flex-col gap-2 text-sm font-semibold">
            {navItem}
          </ul>
          <div className="relative mt-3">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <img src="searchIcon.png" alt="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded text-sm outline-none w-full"
            />
          </div>
          <button className="w-full bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
