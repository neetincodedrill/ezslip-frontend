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
const cookie = require('cookie-cutter')


const Rightheaderlogout:FC = () => {
  const handleLogout = () => {
    cookie.set('ezslipToken', '', { expires: new Date(0) })
}
  return(

    <div className="buttondiv">
      <Link href="/signin">
        <button type="button" className="logoutbutton" onClick = {handleLogout}>Logout</button>
      </Link>
  </div>
    )
}


const Dashboard:FC = () => {
  const router = useRouter();
  var token : any = cookie.get('ezslipToken');
  if(!token) {
    alert("unauthorized access");
    router.push("/signin");
  }

    const [displayModal , setDisplayModal] = useState<boolean>(false);
  
    const [contentIndex, setContentIndex ] = useState<number>(0);

    function handlesetDisplaymodal(value:boolean):any {
        setDisplayModal(value)
        console.log("this has run");
        console.log(displayModal);
      }
    
      function SetContentIndex (value:number) :any  {
        setContentIndex(value)
      }


const footershadow : any = {
    "boxShadow": "1px 1px 6px grey",
    "padding": "50px 0 40px"
  }

  return (

    <>
        <div className={styles.header}>
        
          <div className="container">
            <LeftHeader />
            <MiddleHeader   
            displayModal={displayModal} 
            setdisplayModal={handlesetDisplaymodal} 
            links={linkData.links} 
            SetContentIndex= {SetContentIndex}  />

            <Rightheaderlogout />
          </div>

        </div>
  
   

  <ModalWrapper   displayModal = {displayModal} 
    contentIndex={contentIndex} 
    setdisplayModal={handlesetDisplaymodal}  />


    {/* here is the main dashboard middle content */}
    <div className='flex'>

    <LeftDashboardComponent />

    <RightConfiguration />
    </div>

    <SignupFooter />
      </>
    

  )
}

export default Dashboard