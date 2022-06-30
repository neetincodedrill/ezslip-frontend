import React,{FC} from 'react'
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import RightConfiguration from '../components/OrganisationDetails/RightConfiguration';
import SignupFooter from '../components/SignupFooter';
import stylesdash from "../styles/dash.module.css"
import Userheader from '../components/Userheader';

const configuration = () => {
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