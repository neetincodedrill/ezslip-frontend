import React from 'react'
import Image from 'next/image'
import styles from "./Setup.module.css";
import { useState  } from 'react';

const setUpPara= "Upon completion, your information will be reviewed and a member of our client"



interface SetupchildInterface {
    [index:string] :string
}

const Setupchild:React.FC<SetupchildInterface> = ({
    srcimg,
    altimg ,
    step,
    heading ,
    para,
    height,
     width,
     id,
     bgcolor,
     altbgcolor
}) => {

    const [ishovering , Setishovering] = useState<boolean>(false);
    const [imagesrc , SetImagesrc ] =useState<string>(srcimg);
    const [bgColor, setBgcolor] = useState<string>(bgcolor);

    const onMouseEnterFunction = () => {
        Setishovering(true);
        console.log("entered");
        SetImagesrc(altimg);
        setBgcolor(altbgcolor)

    }

    const onMouseLeaveFunction = () => {
        Setishovering(false);
        console.log("exited");
        SetImagesrc(srcimg);
        setBgcolor(bgcolor);
    }




    return (

    <div className={styles.setup_child}>
        <span className={styles.circle} id={id} style={{ backgroundColor : bgColor}} onMouseEnter={onMouseEnterFunction} onMouseLeave={onMouseLeaveFunction}>
        <Image src={imagesrc} height={height} width={width} className="setup_images"  alt={srcimg}/>
            
        </span>
        <h3>{step}</h3>
        <h2>{heading}</h2>
        <p>{para}</p>
    </div>

    )
}

const Setup:React.FC = () => {
  

        return (

    <div className={styles.setup}>
        <h2>Setup is as Easy as a-b-c’s</h2>
        <div className='flex'>
            <Setupchild 
            srcimg="/assets/images/Vector.png" 
            altimg="/assets/images/messagehover.png" 
            step="Step 1" 
            heading="Link Your Email" 
            para={setUpPara} 
            height="55px"
             width="85px" 
             id={styles.setup1} 
             bgcolor="#AFD7D2" 
             altbgcolor="#47A296"/>
            <Setupchild srcimg="/assets/images/form.png" altimg="/assets/images/file2hover.png" step="Step 2" heading="Fill The Form" para={setUpPara} height="97px" width="85px" id={styles.setup2} bgcolor="rgba(33, 98, 119, 0.13)"  altbgcolor="#3F6275"/>
            <Setupchild srcimg="/assets/images/Frame2.png" altimg="/assets/images/file3hover.png" step="Step 3" heading="Manage Your Data" para={setUpPara} height="77px" width="85px" id={styles.setup3} bgcolor="rgba(33, 98, 119, 0.13)" altbgcolor="#88A3BE" />
        </div>
    </div>
  )
}

export default Setup