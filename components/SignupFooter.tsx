import React from 'react'
import { Leftfooter, Middlefooter, Middlefooter2 } from './Footer';
import Link from 'next/link';
import styles from "./ContactPage/ContactForm.module.css";
import Copyright from './Copyright';





const footerstyle : any = {
    "boxShadow": "1px 1px 6px grey",
    "height": "160px"
  }
  
  
  
  function FooterRight() {
  
      const customStyle : any = {
          "list-style-type":" none",
          "color": "#47a296",
          "width": "15%",
          "text-align": "center"
      }
  
      const buttonStyle:any = {
        "height": "48px",
        "margin-top": "20px",
  "width": "112px",
  "background": "#47a296",
  "border": "none",
  "border-radius": "5px",
  "color": "white",
  "font-size": "18px",
  "font-weight": "bold",
      }
  
      return (
          <div style={customStyle}>
          
       <li>
          <Link href="/pages/signin"><span >Sign In</span></Link>
        </li>
        <span className={styles.spanbutton}>
          <Link href="/pages/signup">
            <button style={buttonStyle}>Sign Up</button>
          </Link>
        </span>
      </div>
  
      )
  }


const SignupFooter = () => {
  return (
    <div>
      
            <div className="footer flex margin-auto"  style={footerstyle}>

                <div className="container">

                    <Leftfooter />
                    <Middlefooter />
                    <FooterRightContactbutton />

                </div>

            </div>

 

        <Copyright />
    </div>
  )
}


const FooterRightContactbutton = () => {
  return (
    <div>
        <div className="buttondiv">
            <Link href="/contactForm">
            <button type="button" className="contactbutton">Contact</button>
            </Link>
        </div>
    </div>
  )
}




export default SignupFooter

