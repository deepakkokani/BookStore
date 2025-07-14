import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = ({darkMode}) => {
  return (
 <footer
      className={`flex flex-col mt-7 items-center gap-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-300 text-black"
      } p-6 md:p-10`}
    >      <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 font-medium text-center md:text-left">
        <li><a>About us</a></li>
        <li><a>Contact</a></li>
        <li><a>Jobs</a></li>
        <li><a>Press kit</a></li>
      </ul>

      <div className="flex gap-4 text-2xl text-gray-600">
        <a href="https://twitter.com"><FaTwitter className="hover:text-blue-400" /></a>
        <a href="https://facebook.com"><FaFacebookF className="hover:text-blue-600" /></a>
        <a href="https://youtube.com"><FaYoutube className="hover:text-red-500" /></a>
      </div>

      <p className="text-sm text-center">
        © 2025 - All rights reserved by ACME Industries Ltd
      </p>
    </footer>
  );
};

export default Footer;
