/** @format */

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { SidebarCanvas } from "../Modals/Modals";
import { avatar } from "../../assest";

const Navbar = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SidebarCanvas show={open} handleClose={() => setOpen(false)} />

      <div className="navbar">
        <div className="content">
          <div className="ham-menu">
            <FaBars
              color="#fff"
              size={20}
              cursor={"pointer"}
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="info">
            <h6>
              Hello, <span>Admin 1</span>
            </h6>
            <h5>{text}</h5>
          </div>
        </div>

        <div className="search_bar">
          <IoSearch color="#000000" />
          <input type="search" placeholder="Search" />
          <img src={avatar} alt="" className="avatar" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
