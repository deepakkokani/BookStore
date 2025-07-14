import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/ThemeSlice";

const Layout = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={darkMode ? "bg-black text-white" : ""}>
      <NavBar darkMode={darkMode} />
      <Outlet />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Layout;
