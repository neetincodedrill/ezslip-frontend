import React, { FC, useState } from "react";
import LeftDashboardComponent from "../components/Dashboard/LeftDashboardComponent";
import RightConfiguration from "../components/ConfigurationPage/RightConfiguration";
import SignupFooter from "../components/SignupFooter";
import stylesdash from "../styles/dash.module.css";
import Userheader from "../components/Userheader";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import DashboardLayout from "@components/DashboardLayout";
import {useEffect} from 'react';


const configuration = () => {
  const router = useRouter();
  var token: any;
  token = getCookie("ezslipToken");
  
useEffect(()=>{
  if (!token) {
    router.push("/signin");  
  }
})
  

  return (
    <>
      <DashboardLayout>
        <RightConfiguration />
      </DashboardLayout>
    </>
  );
};

export default configuration;
