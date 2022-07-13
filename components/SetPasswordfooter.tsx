import React from 'react'
import { Leftfooter, Middlefooter, Middlefooter2 } from './Footer';
import Link from 'next/link';
import styles from "./SetPasswordfooter.module.css";
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
          <Link href="/signin" className={styles.hover}><span >Sign In</span></Link>
        </li>
        <span >
          <Link href="/signup">
            <button style={buttonStyle} className={styles.hover}>Sign Up</button>
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

