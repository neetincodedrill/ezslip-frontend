import React,{FC} from 'react'

import {LeftHeader, MiddleHeader, ModalWrapper } from '../components/Header'

import { useState } from 'react'

import * as linkData from "../components/mockdata/links"

import styles from "../styles/Header.module.css";
import Copyright from '../components/Copyright';
import { Leftfooter, Middlefooter } from '../components/Footer';
import RightFooterdashboard from '../components/RightFooterdashboard';
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';

import RightHistoryComponent from '../components/RightHistoryComponent';
import Userheader from '@components/Userheader';
import SignupFooter from '../components/SignupFooter';

import stylesdash from  "../styles/dash.module.css"




const History:FC = () => {


return(
  <>
 
  <Userheader />


  <div className={stylesdash.dashboard}>


  <LeftDashboardComponent />


  <RightHistoryComponent />

  </div>


  <SignupFooter />

  </>

  )
}

export default History