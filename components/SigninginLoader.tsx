import React from 'react'
import styles from '../styles/signinginloader.module.css'

const SigninginLoader = () => {
  return (
    <div className={styles.signinparent}>

        <div className={styles.signinginloader}>
                <div className={styles.bigbox}>

                <div className={styles.box}>
                        <div className={styles.content}>
                            Signing <span className={styles.in}>In...</span> 
                        </div>  
                </div>
                </div>
        </div>
    </div>
  )
}

export default SigninginLoader