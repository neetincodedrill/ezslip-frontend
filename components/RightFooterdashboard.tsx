import React from 'react'
import styles from '../styles/RightFooterdashboard.module.css'
import Link from "next/link"

const RightFooterdashboard = () => {
  return (
    <div  className="justify-center flex" style={{"width":"17%"}}>
        <Link href="/contact"><button type="submit" className={styles.contact}>Contact</button></Link>
    </div>
  )
}

export default RightFooterdashboard