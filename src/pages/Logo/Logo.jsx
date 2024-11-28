/** @format */

import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import img from "../../assest/Icon.png";
import img1 from "../../assest/logo.png";
import Navbar from "../../components/Navbar/Navbar";

const Logo = () => {
  return (
    <>
      <Navbar text={"Logo"} />
      <div className="logocontainer">
        <div className="logosubcontainer">
          <div className="logoleftcontainer">
            <div className="logolefticon">
              <GiPlainCircle color="#000000" />
            </div>
            <div className="logoleftheading">
              <h6>Choose New Logo</h6>
            </div>
            <div className="logoleftupload">
              <div className="logoleftuploadleft">
                <div className="logoleftuploadleftimage">
                  <img src={img} alt="" />
                </div>
                <p>No File Chosen*</p>
              </div>
              <div className="logoleftlastright">
                <div className="logoleftlastrightdate">
                  <h6>Last Changed on</h6>
                  <h6>01/05/2024</h6>
                </div>
                <div className="logoleftlastrightbuttonchoose">
                  <button>Choose New Logo</button>
                </div>
                <div className="logoleftlastrightbutton">
                  <button>Update</button>
                  <button style={{ color: "#FF0000" }}>Reset</button>
                </div>
              </div>
            </div>
          </div>
          <div className="logorightcontainer">
            <div className="logolefticon">
              <GiPlainCircle color="#000000" />
            </div>
            <div className="logoleftheading" style={{ padding: "0" }}>
              <h6>Current Logo</h6>
            </div>
            <div className="logorightcontainerimage">
              <div className="logorightcontainerimagelogo">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="logorightcontainerimagebutton">
              <div className="logoleftlastrightbuttonchoose">
                <button>Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
