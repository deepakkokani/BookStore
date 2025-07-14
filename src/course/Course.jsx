import React from "react";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
    <div className=" min-h-screen px-5 md:px-20 py-10  md:flex-row justify-between">
        <div className="mt-32 items-center flex flex-col text-center   justify-center">
          <h1 className="text-3xl font-medium md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-600">Here! :)</span>
          </h1>
          <p className="mt-6 md:px-20 px-10  font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolorum dignissimos aspernatur, facere assumenda nisi ducimus est,
            maxime natus repellendus tempore ex maiores? Dignissimos voluptatum
            sint enim provident? Ut, sunt.
          </p>
          <Link to="/" className="mt-6 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 duration-300">Back
          </Link>
        </div>

        {/* container */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {list.map((book) => (
            <div
              key={book.id}
              className="flex flex-col justify-between border rounded shadow-md p-4 bg-white h-full hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2>{book.title}</h2>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-700 mt-1">Price: ₹{book.price}</p>
              <div className="flex items-center mt-2">
                  <p className="text-sm text-pink-500 font-semibold">
                    {book.category}
                  </p>
                  <div className="ml-auto text-medium text-pink-600  rounded-lg px-2 font-sm border border-2 cursor-pointer hover:bg-pink-500 hover:text-white outline-none">
                    Buy Now
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
