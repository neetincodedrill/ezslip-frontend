import React from 'react'
import { Leftfooter, Middlefooter, Middlefooter2 } from './Footer';
import Link from 'next/link';
import styles from "./ContactPage/ContactForm";
import Copyright from './Copyright';


const footerstyle : any = {
    "boxShadow": "1px 1px 6px grey",
    "height": "160px"
  }
  
  
  
  function FooterRight() {
  
      const customStyle : any = {
          "listStyleType":" none",
          "color": "#47a296",
          "width": "15%",
          "textAlign": "center"
      }
  
      const buttonStyle:any = {
        "height": "48px",
        "marginTop": "20px",
  "width": "112px",
  "background": "#47a296",
  "border": "none",
  "borderRadius": "5px",
  "color": "white",
  "fontSize": "18px",
  "fontWeight": "bold",
      }
  
      return (
          <div style={customStyle}>
          
       <li>
          <Link href="/pages/signin"><span >Sign In</span></Link>
        </li>
        <span >
          <Link href="/pages/signup">
            <button style={buttonStyle}>Sign Up</button>
          </Link>
        </span>
      </div>
  
      )
  }


const SetPasswordfooter = () => {
  return (
    <div>
      
            <div className="footer flex margin-auto"  style={footerstyle}>

                <div className="container">

                    <Leftfooter />
                    <Middlefooter />
                    <FooterRight />

                </div>

            </div>

 

        <Copyright />
    </div>
  )
}

export default SetPasswordfooter

