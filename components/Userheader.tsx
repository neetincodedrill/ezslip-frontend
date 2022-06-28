import styles from "../styles/Header.module.css";
import Copyright from '../components/Copyright';
import { Leftfooter, Middlefooter } from '../components/Footer';
import RightFooterdashboard from '../components/RightFooterdashboard';
import {useState} from "react";
import {LeftHeader, MiddleHeader, ModalWrapper } from '../components/Header'
import Link from "next/link"

import * as linkData from "../components/mockdata/links"

import React,{FC} from 'react'

const Userheader = () => {

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


   </>
  )
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
export default Userheader;