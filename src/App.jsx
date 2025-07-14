import React from "react";
import NavBar from "./components/navBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";
import Home from "./home/home";
import Course from "./course/Course";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="course" element={<Course />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
