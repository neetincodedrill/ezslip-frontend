import React from 'react'
import LeftDashboardComponent from '../components/Dashboard/LeftDashboardComponent';
import SignupFooter from '../components/SignupFooter';
import stylesdash from "../styles/dash.module.css"
import Userheader from '../components/Userheader';
import RightConfigurationeditable from '../components/OrganisationDetails/RightConfigurationeditable';

const Editprofile = () => {
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