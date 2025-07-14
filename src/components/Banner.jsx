import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen min-h-screen p-20  flex flex-col md:flex-row  justify-between my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2  mt-32 md:mt-32">
          <div className="space-y-12 flex flex-col">
            <h1 className="text-4xl font-semibold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a,
              architecto illo porro voluptates itaque, labore error assumenda
              atque maiores deleniti nulla alias nostrum perferendis ipsam
              similique beatae. Amet, distinctio?
            </p>

            {/* Email Input with Icon */}
            <div className="relative max-w-md w-full">
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
          </div>

        {/* secondary button */}
          <div className="flex justify-start mt-6">
            <button className="px-3 py-2 bg-pink-500 text-white rounded-lg font-semibold">
              Secondary
            </button>
          </div>
        </div>

       <div className="order-1 w-full md:w-1/2 mt-10 md:mt-0">
        <img src="books.jpg"/>
       </div>
       
      </div>
    </>
  );
};

export default Banner;
