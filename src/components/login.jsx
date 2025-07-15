import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div
          className={`modal-box shadow-xl rounded-2xl  ${
            darkMode ? "bg-slate-800 text-white" : " text-black"
          }`}
        >
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold  mb-2 text-center text-2xl">Login</h3>
          <div className="flex flex-col gap-5 p-5 ">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-pink-600 focus:outline-none text-sm ${
                darkMode ? "bg-slate-800 text-white" : " text-black"
              }`}
            />
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-pink-600 focus:outline-none text-sm ${
                darkMode ? "bg-slate-800 text-white" : " text-black"
              }`}
            />
            <div className="flex justify-between items-center mt-7">
              <Link className="bg-pink-600 px-3 py-1 rounded-lg text-white hover:bg-pink-800">
                Login
              </Link>
              <p>
                Not registered?{" "}
                <span>
                  <Link
                    to="/signup"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                    className="text-blue-600"
                  >
                    Signup
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
