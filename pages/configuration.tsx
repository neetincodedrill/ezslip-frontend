import React,{FC,useState} from 'react'
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import RightConfiguration from '../components/OrganisationDetails/RightConfiguration';
import SignupFooter from '../components/SignupFooter';
import stylesdash from "../styles/dash.module.css"
import Userheader from '../components/Userheader';
import { getCookie } from 'cookies-next';
import { useRouter }  from 'next/router'


const configuration = () => {
  
  const router = useRouter()
  var token: any; 
  token = getCookie('ezslipToken')

  if(!token){
    if (typeof window !== 'undefined') {
      window.location.href = 'http://localhost:3000';
    }
  }
  
  return (
  <>
 
  <Userheader />


  <div className={stylesdash.dashboard}>


  <LeftDashboardComponent />


  <RightConfiguration />

  </div>


  <SignupFooter />

  </>
  )
}


export default configuration

