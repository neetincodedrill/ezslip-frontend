import React from 'react';
import Image from 'next/image';
import styles from "./Security.module.css";

const SecurityLeft:React.FC = () => {
return(
    <div className={styles.security_left}>
        <div className={styles.security_left_content}>
            <h2> Security Is our priority </h2>
            <p> We are the only non-intrusive solution and do not need any api integration with your accounting software. Your data stays safe with you. </p>
            <p>And the setup takes less time than what it would take for you to read this! After all, your time is valuable.</p>
        </div>
    </div>
)
}

const SecurityRight:React.FC = () => {
return(
    <div className={styles.security_right}>
        
        <Image 
        className={styles.biometric_image}
        src="/assets/images/biometric.png"
        layout='fill'
        alt='biometric'
        />
    </div>
)
}

const Security:React.FC = () => {
return (
<div className={styles.security}>
    <SecurityLeft />
    <SecurityRight />
</div>
)
}

export default Security