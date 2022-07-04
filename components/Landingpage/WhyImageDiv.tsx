import Image from "next/image";
import styles from  './WhyImageDiv.module.css'

const WhyImageDiv:React.FC = () => {
return( 
    <div className={styles.whyworkharddiv}>
    <div className={styles.image_div}>
        <Image 
        src="/assets/images/christina.png"
        layout="fill"
        alt="christina"
        />
    </div>
    <div className={styles.below_image_div}>
        <h1>Why work Hard</h1>
        <h2>When ezSlips Can work Smart For you</h2>
        <p>And the setup takes less time than what it would take for you to read this! After all, your time is valuable.</p>

    </div>
    </div>

)
}
export default WhyImageDiv;