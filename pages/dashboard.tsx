import React, { FC, useState } from "react";
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import RightConfiguration from "../components/ConfigurationPage/RightConfiguration";
import SignupFooter from "../components/SignupFooter";
import stylesdash from "../styles/dash.module.css";
import Userheader from '../components/Userheader';
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import DashboardLayout from "@components/DashboardLayout";
import {useEffect} from 'react';
import RightConfigurationeditable from "@components/ConfigurationPage/RightConfigurationeditable";
import RightEmployeesComponent from "@components/RightEmployeesComponent";
import RightHistoryComponent from "@components/RightHistoryComponent";
import RightNewComponent from "@components/RightNewComponent";

const dashboard = () => {
    const [activeLink, setActiveLink] = useState({
        "configuration" : true,
        "configurationEditable": false,
        "employees": false,
        "history":false,
        "new":false
    })

    const router = useRouter();
    var token: any;
    token = getCookie("ezslipToken");
    
  useEffect(()=>{
    if (!token) {
      router.push("/signin");  
    }
  })
    
  return (
    <div>
        <Userheader />
        <LeftDashboardComponent/>
        
        <RightConfiguration />
        <RightConfigurationeditable />
        <RightEmployeesComponent />
        <RightHistoryComponent />
        <RightNewComponent />
        <SignupFooter />
    </div>
  )
}

export default dashboard