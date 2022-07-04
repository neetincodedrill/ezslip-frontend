import React,{FC} from 'react'
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import RightHistoryComponent from '../components/RightHistoryComponent';
import Userheader from '@components/Userheader';
import SignupFooter from '../components/SignupFooter';
import stylesdash from  "../styles/dash.module.css"
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import {useEffect} from 'react';
import DashboardLayout from '@components/DashboardLayout';


var token: any; 
token = getCookie('ezslipToken')

const History:FC = () => {
  const router = useRouter();
  
 useEffect(()=>{
  if(!token){
    router.push("/");
   }
 })

return(
  <>
  <DashboardLayout>
  <RightHistoryComponent />
  </DashboardLayout>
  </>

  )
}
export default History