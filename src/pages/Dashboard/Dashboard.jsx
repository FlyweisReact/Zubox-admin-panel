/** @format */

import React from "react";
import TopDashboard from "./TopDashboard";
import MiddleDashboard from "./MiddleDashboard";
import BottomDashboard from "./BottomDashboard";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar text={"Dashboard"} />
      <div className="dashboardcontainer">
        <div className="dashboardtoppart">
          <TopDashboard />
        </div>
        <div className="dashboardmiddlepart">
          <MiddleDashboard />
        </div>
        <div className="dashboardbottompart">
          <BottomDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
