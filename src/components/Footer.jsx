import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerItem = (
    <>
      <ul className="flex space-x-5 font-medium">
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Jobs</a>
        </li>
        <li>
          <a>Press kit</a>
        </li>
      </ul>
    </>
  );
  return (
    <div>
      <footer className="flex flex-col items-center   justify-center gap-7 bg-slate-300 p-10">
        {/* footer item */}
        <div className="flex flex-col gap-6 items-center md:items.start">
          {footerItem}
        </div>

        {/* Social Media icons */}
        <div className="flex gap-4 text-2xl text-gray-600">
          <a href="https://twitter.com">
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
          <a href="https://facebook.com">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://youtube.com">
            <FaYoutube className="hover:text-red-500 transition" />
          </a>
        </div>

        {/* paragraph*/}
        <p className="text-sm">
          Copyright &copy; 2025- All right reserved by ACME industries Ltd
        </p>
      </footer>
    </div>
  );
};

export default Footer;
