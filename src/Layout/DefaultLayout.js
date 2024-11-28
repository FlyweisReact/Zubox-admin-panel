/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const DefaultLayout = () => {
  return (
    <section className="default-layout">
      <div className="left-container">
        <Sidebar />
      </div>
      <div className="right-container">
        <Outlet />
      </div>
    </section>
  );
};

export default DefaultLayout;
