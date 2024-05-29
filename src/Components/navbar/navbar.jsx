import React from "react";
import "boxicons";
import { Navbar } from "./navbarstyle";
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <Navbar>
      <p className="logo">
        Eshmirzaev <span>Sarvar</span>
      </p>
      <p className="logo2">
        E. <span>Sarvar</span>
      </p>
      <box-icon name="menu" className="menu"></box-icon>
      <div className="pageswrapper">
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/education">
          <p>Education</p>
        </Link>
        <p>Servises</p>
        <p>Contact</p>
      </div>
    </Navbar>
  );
};

export default NavbarComponents;
