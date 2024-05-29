import React from "react";
import MainPaige from "./mainfile/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponents from "./navbar/navbar";
import EducationC from "./education/educationmain";
import FooterMain from "./Footer/footermain";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<MainPaige />} />
        <Route path="/education" element={<EducationC />} />
      </Routes>
      <FooterMain />
    </BrowserRouter>
  );
};

export default RouterComponent;
