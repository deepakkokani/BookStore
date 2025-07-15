import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUp = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
    setTimeout(() => {
      const modal = document.getElementById("my_modal_3");
      if (modal?.showModal) modal.showModal();
    }, 100);
  };

  const handleClose = () => {
    navigate("/"); // Navigate back to home or any desired page
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className={`relative w-full max-w-xl shadow-xl rounded-2xl px-10 py-12 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </button>

        <h3 className="font-bold mb-6 text-center text-3xl">Sign Up</h3>

        <div className="flex flex-col gap-6">
             <label className="font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-pink-600 focus:outline-none text-sm ${
              darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
            }`}
          />
          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-pink-600 focus:outline-none text-sm ${
              darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
            }`}
          />

          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-pink-600 focus:outline-none text-sm ${
              darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
            }`}
          />

          <div className="flex justify-between items-center mt-6">
            <Link
              className="bg-pink-600 px-5 py-2 rounded-lg text-white hover:bg-pink-800"
              to="/"
            >
              Sign Up
            </Link>
            <p className="text-sm">
              Already registered?{" "}
              <button
                onClick={handleLoginClick}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
