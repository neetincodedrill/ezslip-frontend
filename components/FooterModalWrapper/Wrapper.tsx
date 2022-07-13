import React,{FC} from 'react'
import Product from './FooterModals/Product'
import Contact from './FooterModals/Contact';
import About from './FooterModals/About';
import Pricing from './FooterModals/Pricing';
import Policy from './FooterModals/Policy';
import styles from './Wrapper.module.css'
import {useEffect} from 'react';

interface wrapperProps {
  setDisplayWrapper:any,
  //  React.Dispatch<React.SetStateAction<{ isbuttonClicked: boolean; target: string; }>>
  displayWrapper: any
}

const Wrapper:FC <wrapperProps> = ({setDisplayWrapper,displayWrapper}) => {
  console.log(displayWrapper);
  const closeWrapper=(e:any)=>{
    if( e.target.id == "wrapperid" ) { 
      console.log(e);
      setDisplayWrapper({
        "isbuttonClicked":false
      });
    }
    
   
  }
  return (

    <div className={styles.wrapper} onClick={closeWrapper} id="wrapperid">
       {displayWrapper.target ===  "Product" &&  <Product />}
       { displayWrapper.target === "Contact" && <Contact />}
      { displayWrapper.target === "About" && <About />}
      { displayWrapper.target === "Pricing" && <Pricing />}
      { displayWrapper.target === "Policy" && <Policy />}
    </div>

  )
}

export default Wrapper