import React from "react";
import "../style/pages/Header.scss";
import logo from "../assets/Instagram.png";
import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <FaSearch className="icon" />
          <p>Search</p>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
