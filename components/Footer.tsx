import React from 'react'
import styles from "../styles/Footer.module.css";
import Link from 'next/link';
import Wrapper from './FooterModalWrapper/Wrapper';
// import Product from '@components/FooterModalWrapper/FooterModals/Product';
import {useState} from 'react';

export const Leftfooter:React.FC = () => {
  return(
    <span className={styles.footerLogo}>ezSlips</span>
  )
}

export const Middlefooter:React.FC = () => {

  const [displayWrapper, setDisplayWrapper] = useState({
    "isbuttonClicked" : false,
    "target" : ""
  });

 
  const displayModal=(value:string)=>{
    setDisplayWrapper({
      "isbuttonClicked":true,
      target: value
    });

  }

return(
<div className={styles.middlefooter}>

  <div className={styles.footerlink} onClick={ ()=>{ displayModal("Product")}}>Product</div>

  <div className={styles.footerlink} onClick={ ()=>{ displayModal("Contact")} }>Contact</div>

  <div className={styles.footerlink} onClick={ ()=>{ displayModal("About") } }>About</div>

  <div className={styles.footerlink} onClick={ ()=>{ displayModal("Pricing") }}>Pricing</div>
    
  <div className={styles.footerlink} onClick={ ()=>{ displayModal("Policy") }}>Policy</div>

  { displayWrapper.isbuttonClicked && (<Wrapper setDisplayWrapper={setDisplayWrapper} displayWrapper={displayWrapper}/>)}
</div>
)
}

const Rightfooter:React.FC = () => {
  return(
  <div className={styles.rightfooter}>
   <p>A single platform to accept payments, protect revenue, and control your finances.</p>
  </div>
  )
}

const Rightfooter2:React.FC = () => {
  return(
  <div className={styles.rightfooter2}>
   <p>A single platform to accept payments, protect revenue, and control your finances.</p>
  </div>
  )
}

export const Middlefooter2:React.FC = () => {
  return (
    <div className={styles.footerbuttondiv}>
     <li>
        <Link href="/signin"><span className={styles.signinlink}>Sign In</span></Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </span>

      <span className={styles.spanbutton}>
        <Link href="/contactForm">
          <button>Contact</button>
        </Link>
      </span>
    </div>
  )
}

const Footer:React.FC = () => {
  return (

    <div className={styles.mainfooter}>
    <div className={styles.footer}>
      <div className="container">

      <Leftfooter />
      <Middlefooter />
      <Rightfooter/ >

      </div>
    </div>
    <div className={styles.footer2nd}>
      <div className="container">

      <Middlefooter2 />
      <Rightfooter2 />
      
      </div>
    </div>
    </div>

  )
}

export default Footer