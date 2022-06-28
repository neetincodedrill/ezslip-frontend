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



// function getcookie(key:string) {

//   const value : any = document.cookie ? document.cookie : null;
//   key= key+"=";
//   var tokencookie;
//   const parts = value.split('; ');
  
//   console.log(parts)
//   parts.forEach((val)=>{
//   if(val.indexOf(key)===0){
//     tokencookie = val.substring(key.length);
//   }
// })
//   return tokencookie;
// }

// Cookies.get('name'); 

var token : any;
if (typeof window !== 'undefined') {
  // Perform localStorage action
   token = localStorage.getItem('ezslipToken')
}




const Rightheaderlogout:FC = () => {
  return(

    <div className="buttondiv">
    <Link href="/signin">
   <button type="button" className="logoutbutton" onClick= {()=>
   {
     document.cookie = "token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/"
     
     console.log(document.cookie);
   }
   }
   >Logout</button>
    </Link>
</div>
    )
}


const Dashboard:FC = () => {
  const router = useRouter();


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






{/* <div className="flex align_item_center" style={footershadow}>
    <Leftfooter />
    <Middlefooter />

  <RightFooterdashboard />
    
    </div>

<Copyright />  */}

<SignupFooter />
  </>
    
    


  )
}

export default Dashboard