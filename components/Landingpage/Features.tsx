import React from "react";
import Image from "next/image"
import styles from "./Features.module.css"

interface FeatureBoxProps{
[index:string] :string
}

const FeatureBox:React.FC<FeatureBoxProps> = ({
  src ,
  heading,
  para,
  bgcolor
}) => {
  return(
    <div className={styles.featuresbox}> 
        <span className={styles.feature_circle} id={src} style={{"backgroundColor": bgcolor } }></span>
        <Image 
        src={src}
        width="100"
        height="100"
        alt={src}
        />        
        <h1 className={styles.featuresbox_h1}>{heading}</h1>
        <p>{para}</p>
        <span className=""></span>
    </div>
  )
}



const Features:React.FC = () => {
  const paras = ["Hassle free work and automated salary slips for smooth workflow","Custom account and slips creation according to you and your employees","Simple and easy interfacefor steady, fast and friendly workflow"]

  return (
    <div className={styles.features}>
      <h1 className={styles.features_h1}>Features</h1>
      <div className={styles.features_div}>
        <FeatureBox src="/assets/images/Frame.png" heading="Instant Slips" para={paras[0]} bgcolor="rgba(0, 255, 87, 0.1);"/>
        <FeatureBox src="/assets/images/gear 1.png" heading="Customization" para={paras[1]} bgcolor="rgba(237, 199, 0, 0.1);"/>
        <FeatureBox src="/assets/images/add-friend 1.png" heading="User Friendly" para={paras[2]} bgcolor="rgba(0, 117, 254, 0.1);"/>
      </div>
    </div>
  );
};

export default Features;
