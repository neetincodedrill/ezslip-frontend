import React,{FC,useState} from 'react'
import LeftDashboardComponent from '@components/Dashboard/LeftDashboardComponent';
import SignupFooter from '@components/SignupFooter';
import styles from "@styles/dash.module.css";
const cookie = require('cookie-cutter');

import Userheader from '@components/Userheader';
import RightEmployeesComponent from '@components/RightEmployeesComponent';

const EmployeesPage = () => {
  return (
  <>
 
  <Userheader />


  <div className={styles.dashboard}>


  <LeftDashboardComponent />


  <RightEmployeesComponent />

  </div>


  <SignupFooter />

  </>
  )
}


export default EmployeesPage

