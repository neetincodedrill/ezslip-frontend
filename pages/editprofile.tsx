
import React,{FC} from 'react'
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import SignupFooter from '../components/SignupFooter';
import stylesdash from "../styles/dash.module.css"
import Userheader from '../components/Userheader';
import { getCookie } from 'cookies-next';
import RightConfigurationeditable from '@components/ConfigurationPage/RightConfigurationeditable'

var token: any; 
token = getCookie('ezslipToken')
if(!token){
  if (typeof window !== 'undefined') {
    window.location.href = 'http://localhost:3000';
  }
}

const Editprofile:FC = () => {
  return (
  <>
 
  <Userheader />


  <div className={stylesdash.dashboard}>


  <LeftDashboardComponent />


  
  <RightConfigurationeditable />

  </div>


  <SignupFooter />

  </>
  )
}


export default Editprofile