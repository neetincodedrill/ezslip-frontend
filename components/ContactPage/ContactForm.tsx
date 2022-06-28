import React,{FC} from 'react'
import styles from "./ContactForm.module.css";
import { Leftfooter, Middlefooter, Middlefooter2 } from '../Footer';

import Link from 'next/link'
import Copyright from '../Copyright';




function FooterRight() {



    return (
        <div className={styles.customStyle}>
        
     <li>
        <Link href="/pages/signin"><span >Sign In</span></Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/pages/signup">
          <button className={styles.buttonStyle}>Sign Up</button>
        </Link>
      </span>
    </div>

    )
}
const ContactForm:FC = () => {
  return (
      <>
    
<div className={styles.main}>
    
<h1 className={styles.heading1}>Get in Touch</h1>
<hr className={styles.hruler}/>

<div className={styles.formDiv}>
    
    <form >
        <input type="text" name="" id="name" placeholder="Your name"  className={styles.inputs}/ >
        <br/>
        <input type="text" name="" id="Organisation" placeholder="Organsation Name"  className={styles.inputs}/>
        <br/>
        <input type="email" name="" id="email" placeholder="Email"  className={styles.inputs}/>
        <br/>
        <input type="number" name="" id="contact" placeholder="Contact Number" className={styles.inputs}/>
        <br/>
        <textarea name="" id="details" cols={30} rows={10} placeholder="Some details" className={styles.inputs}></textarea>
        <br/>
        <button type="submit"  className={styles.inputs} id={styles.submitbutton}>Get a quote</button>
    </form>
    
</div>


</div>

    <MainCommonFooter />
      </>

)
}

const MainCommonFooter:FC = () => {
  return (
    <div>
      <div className={`${styles.footershadow} flex align_item_center`}>
    <div className="footer flex margin-auto">

      <Leftfooter />
      <Middlefooter />
      <FooterRight />
    </div>
  </div>
  <Copyright /></div>
  )
}

export {MainCommonFooter}

export default ContactForm