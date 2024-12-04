/** @format */

import { AnimatePresence, motion } from "motion/react";
import { Modal, Offcanvas } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
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
import { default_logo } from "../../assest";
import { useLocation, useNavigate } from "react-router-dom";

export const DeleteConfirmation = ({
  open,
  setOpen,
  text = "Are you sure?",
  deleteHandler,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, zIndex: -100 }}
          animate={{ opacity: 1, zIndex: 200 }}
          exit={{ opacity: 0, zIndex: -100 }}
          transition={{ duration: 0.3 }}
          className={"delete_confirmation_container"}
        >
          <div className={"delete_confirmation"}>
            <div className={"content"}>
              <div className={"blank"}></div>
              <h5 className={"headline"}> {text} </h5>
            </div>

            <div className={"btn_container"}>
              <button
                className={"submit"}
                type="button"
                onClick={() => deleteHandler()}
              >
                YES
              </button>
              <button className={"reset"} onClick={() => setOpen(false)}>
                NO
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DefaultDialog = ({ show, handleClose, children, size }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
    >
      {children}
    </Modal>
  );
};

export const SidebarCanvas = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <MdHome size={18} />,
      link: "/dashboard",
    },
    {
      name: "Logo",
      icon: <MdHome size={18} />,
      link: "/logo",
    },
    {
      name: "Cell",
      icon: <LuBarChart2 size={18} />,
      link: "/cell",
    },
    {
      name: "Places",
      icon: <FaLocationDot size={18} />,
      link: "/places",
    },
    {
      name: "Country & City",
      icon: <FaLocationDot size={18} />,
      link: "/country&city",
    },
    {
      name: "Skill Catagory",
      icon: <GiSkills size={18} />,
      link: "/skill-category",
    },
    {
      name: "Cell’s Details",
      icon: <PiMicrosoftExcelLogoBold size={18} />,
      link: "/cells-details",
    },
    {
      name: "Site Map",
      icon: <TfiMapAlt size={18} />,
      link: "/site-map",
    },
    {
      name: "Users",
      icon: <FaUser size={18} />,
      link: "/users",
    },
    {
      name: "About us",
      icon: <IoMdInformationCircle size={18} />,
      link: "/about-us",
    },
    {
      name: "Slider Video",
      icon: <GoDeviceCameraVideo size={18} />,
      link: "/slider-video",
    },
    {
      name: "User Cell",
      icon: <BsFileEarmarkSpreadsheet size={18} />,
      link: "/user-cells",
    },
    {
      name: "Website Background",
      icon: <AiOutlineGlobal size={18} />,
      link: "/website-background",
    },
  ];

  const navHandler = (link) => {
    navigate(link);
    handleClose();
  };
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Body className="sidebar_canvas">
        <div className="close_btn">
          <IoMdClose onClick={() => handleClose()} />
        </div>
        <div className="sidebar">
          <img src={default_logo} alt="" className="thumbnail" />

          <ul className="links">
            {sidebarItems.map((item) => (
              <li
                className={`item ${
                  location.pathname === item.link ? "active" : ""
                }`}
                onClick={() => navHandler(item.link)}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>

          <button className="log_out_btn">Logout</button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
