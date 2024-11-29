/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import img from "../../assest/sidelogo.png";
import { MdHome } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";

import { TfiMapAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <MdHome />,
      link: "/dashboard",
    },
    {
      name: "Logo",
      icon: <MdHome />,
      link: "/logo",
    },
    {
      name: "Cell",
      icon: <LuBarChart2 />,
      link: "/cell",
    },
    {
      name: "Places",
      icon: <FaLocationDot />,
      link: "/places",
    },
    {
      name: "Country & City",
      icon: <FaLocationDot />,
      link: "/country&city",
    },
    {
      name: "Skill Catagory",
      icon: <GiSkills />,
      link: "/skill-category",
    },
    {
      name: "Cell’s Details",
      icon: <PiMicrosoftExcelLogoBold />,
      link: "/cells-details",
    },
    {
      name: "Site Map",
      icon: <TfiMapAlt />,
      link: "/site-map",
    },
    {
      name: "Users",
      icon: <FaUser />,
      link: "/users",
    },
    {
      name: "About us",
      icon: <IoMdInformationCircle />,
      link: "/about-us",
    },
    {
      name: "Slider Video",
      icon: <GoDeviceCameraVideo />,
      link: "/payments",
    },
    {
      name: "User Cell",
      icon: <BsFileEarmarkSpreadsheet />,
      link: "/timesheet-Management",
    },
    {
      name: "Website Background",
      icon: <AiOutlineGlobal />,
      link: "/termsconditions",
    },
  ];

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="sidebarcontainer">
        <div className="sidelogo">
          <div className="sidelogo1">
            <img src={img} alt="Logo" />
          </div>
        </div>
        <div className="sideitems">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                isActive ? "sideitemactive" : "sideitem"
              }
            >
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="sidelogoutbtn">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
