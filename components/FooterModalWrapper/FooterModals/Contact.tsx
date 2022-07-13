import React from 'react'
import styles from "./modals.module.css";

const Contact = () => {
  return (
    <>
     <div className ={styles.parent}>
      <div className={`${styles.firstmodalchild} ${styles.modalchilds}`}>
        <div className={styles.name}>Contact</div>
        <p >A single platform to accept payments, protect revenue, and control your finances.1111</p>
      </div>
      
      <div className={`${styles.secondmodalchild} ${styles.modalchilds}`}>
      
        <h2>For Business111</h2>
        <h3>Teams111</h3>
        <p className={styles.samepara}>A single platform to accept payments, protect revenue, and control your finances.111</p>
        <hr className={styles.hruler} />
        <h3>Enhancements111</h3>
        <p className={styles.samepara}>A single platform to accept payments, protect revenue, and control your finances.111</p>

      </div>

      <div className={`${styles.thirdrdmodalchild} ${styles.modalchilds}`}>
      <h2>For Individual111</h2>
        <h3>Online111</h3>
        <p className={styles.samepara}>A single platform to accept payments, protect revenue, and control your finances111.</p>
        <hr className={styles.hruler}/>
        <h3>Authentication111</h3>
        <p className={styles.samepara}>A single platform to accept payments, protect revenue, and control your finances111.</p>
      </div>
   </div>
    </>
  )
}

export default Contact