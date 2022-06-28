import React,{FC} from 'react'

import {LeftHeader, MiddleHeader, ModalWrapper } from '../components/Header'

import { useState } from 'react'

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


import Userheader from '../components/Userheader';

const configuration = () => {
  return (<>
 
          <Userheader />


    <div className='flex'>

<LeftDashboardComponent />

<RightConfiguration />

</div>


<SignupFooter />

  </>
  )
}


var token : any;
if (typeof window !== 'undefined') {
  // Perform localStorage action
   token = localStorage.getItem('ezslipToken')
}








{/* here is the main dashboard middle content */}


export default configuration