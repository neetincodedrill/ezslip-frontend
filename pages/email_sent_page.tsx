import React from 'react'
import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter';
import styles from "../styles/email_sent_page.module.css"

const email_sent_page = () => {
  return (
    <div>
         <Header />
         <div className={styles.main}>

            <div className={styles.dialog_box}>
            <div className={styles.content}>
            Password Reset E-mail Sent
            Please Check Your Inbox 
            and continue in new window  
            </div>
            </div>

         </div>
        <SetPasswordfooter />
    </div>
  )
}

export default email_sent_page