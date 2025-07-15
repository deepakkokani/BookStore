import React from "react";
import NavBar from "../components/navBar";
import Banner from "../components/Banner";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Home = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div>
        <Banner />
      <FreeBook darkMode={darkMode} />
      </div>
    </>
  );
};

export default Home;
