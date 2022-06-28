import React,{FC,useState} from 'react'
import {LeftHeader, MiddleHeader, ModalWrapper } from '../components/Header'
import * as linkData from "../components/mockdata/links"
import styles from "../styles/Header.module.css";
import Copyright from '../components/Copyright';
import { Leftfooter, Middlefooter } from '../components/Footer';
import RightFooterdashboard from '../components/RightFooterdashboard';
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import RightConfiguration from '../components/RightConfiguration';
import SignupFooter from '../components/SignupFooter';
import Link from "next/link"
import { useRouter } from 'next/router';
import stylesdash from "../styles/dash.module.css"
const cookie = require('cookie-cutter');


import Userheader from '../components/Userheader';
import RightEmployeesComponent from '@components/RightEmployeesComponent';

const EmployeesPage = () => {
  return (
  <>
 
  <Userheader />


  <div className={stylesdash.dashboard}>


  <LeftDashboardComponent />


  <RightEmployeesComponent />

  </div>


  <SignupFooter />

  </>
  )
}


export default EmployeesPage

