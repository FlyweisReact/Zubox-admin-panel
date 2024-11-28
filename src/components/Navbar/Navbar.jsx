/** @format */

import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../../assest/Avatar.png";

const Navbar = ({ toggleSidebar, text }) => {
  return (
    <>
      <div className="navbarcontainer">
        <div className="navbarhumberger">
          <div className="navbarhumberger1">
            <GiHamburgerMenu
              color="#FFFFFF"
              size={25}
              onClick={toggleSidebar}
            />
          </div>
          <div className="navbarleft">
            <h6>
              Hello, <span>Admin 1</span>
            </h6>
            <h5>{text}</h5>
          </div>
        </div>
        <div className="navbarright">
          <div className="navbarrightsearchbox">
            <div className="searchbarnavbar">
              <IoSearch color="#000000" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="navbarprofile">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
