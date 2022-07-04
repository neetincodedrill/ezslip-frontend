import LeftDashboardComponent from "@components/Dashboard/LeftDashboardComponent";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SignupFooter from "@components/SignupFooter";
import Userheader from "@components/Userheader";
import React from "react";
import stylesdash from  "../../styles/dash.module.css"

interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Userheader />
      <div className={stylesdash.dashboard}>
        <LeftDashboardComponent />
            {children}
      </div>
      <SignupFooter />
    </div>
  );
};

export default DashboardLayout;
