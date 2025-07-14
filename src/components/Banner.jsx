import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="max-w-screen min-h-screen px-5 md:px-20 py-10 flex flex-col md:flex-row justify-between">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-base md:text-xl">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis provident quas, modi laborum libero quasi odit. Provident cum tempora cupiditate quis explicabo similique modi dolorum? Illum atque aliquam minima quisquam?
          </p>

          <div className="relative max-w-md mx-auto md:mx-0 w-full">
            <HiOutlineMail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Enter your email to login"
              className="pl-10 pr-4 py-2 w-full border-2 border-zinc-300 rounded-lg outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold">
              Secondary
            </button>
          </div>
        </div>
      </div>

      <div className="order-1 w-full md:w-1/2 mt-10 md:mt-20 flex justify-center">
        <img src="books.jpg" alt="Books" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
