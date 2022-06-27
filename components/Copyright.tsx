import React from 'react'
import styles from '../styles/Copyright.module.css'

const Copyright:React.FC = () => {
  return (
    <div className={styles.copyright}>
        <span className={styles.copyrightlogo}>ezSlips</span>
        <span className={styles.copyrightsymbol}> <sup>&#169;</sup> </span>
        <span >All Rights Reserved</span>
    </div>
  )
}

export default Copyright