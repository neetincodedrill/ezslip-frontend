import React from 'react'
import styles from "../styles/Footer.module.css";
import Link from 'next/link';

export const Leftfooter:React.FC = () => {
  return(
    <span className={styles.footerLogo}>ezSlips</span>
  )
}

export const Middlefooter:React.FC = () => {
return(
<div className={styles.middlefooter}>
<div className={styles.footerlink}>Product</div>
    <div className={styles.footerlink}><Link href="/contactForm">Contact</Link> </div>
    <div className={styles.footerlink}>About</div>
    <div className={styles.footerlink}>Pricing</div>
    <div className={styles.footerlink}>Policy</div>
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
        <Link href="/pages/signin"><span className={styles.signinlink}>Sign In</span></Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/pages/signup">
          <button>Sign Up</button>
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
      <Middlefooter2 />
      <Rightfooter2 />
      
    </div>
    </div>

  )
}

export default Footer