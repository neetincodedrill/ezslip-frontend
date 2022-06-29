import React,{FC} from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import * as linkData from "./mockdata/links"
import * as modalData from "./mockdata/ModalData" 
import { useState } from 'react'
import Image from "next/image"

const Header: FC = () => {
  
  const [displayModal , setDisplayModal] = useState<boolean>(false);
  
  const [contentIndex, setContentIndex ] = useState<number>(0);

    function handlesetDisplaymodal(value:boolean):any {
      setDisplayModal(value)
      console.log("this has run");
      console.log(displayModal);
    }
  
    function SetContentIndex (value:number) :any  {
      setContentIndex(value)
    }
  
    return (
      <>
  <div className={styles.header}>
    <div className="container">

    <LeftHeader />
  
    <MiddleHeader 
    displayModal={displayModal} 
    setdisplayModal={handlesetDisplaymodal} 
    links={linkData.links} 
    SetContentIndex= {SetContentIndex}  />

    <RightHeader />
    
  </div>
  
  <ModalWrapper 
  displayModal = {displayModal} 
  contentIndex={contentIndex} 
  setdisplayModal={handlesetDisplaymodal}  
  />
  </div>
  </>
    );
  };
  

  
  export const LeftHeader:FC = () => {
      return (
        <div className={styles.left_header}>
          <div className={styles.left_header_h1}>
            <Link href="/">
              <span className={styles.main_logo}>ezSlips</span>
            </Link>
          </div>
        </div>
      );
    }

interface MiddleHeaderProps {
  links : linkData.Links[],
  displayModal: boolean, 
  SetContentIndex?: any,
  setdisplayModal : any
}

export const MiddleHeader:FC<MiddleHeaderProps> = ({ links , displayModal, setdisplayModal, SetContentIndex }) => {

  function changeDisplay() {
    setdisplayModal(!displayModal);
  }
   
  return(

    <div className={styles.middle_header}>
      {links.map((val, index) => (
        <div key={val.text} id={val.text} className={styles.middleheaderlink} 
        onClick={ 
          ()=>{
          console.log("clicked")
          changeDisplay();
          SetContentIndex(index);
          console.log(index);
        }
        }>
      
          <Link href={val.href}>
            <>
              <h3>{val.text}</h3>

              <span className={styles.down_arrow}>

                <Image
                  src="/assets/images/down-arrow.png"
                  alt="down arrow"
                  height="10"
                  width="20"
                  />
              </span>

            </>
          </Link>
        </div>
      ))}

      </div>
  );
}

const RightHeader:FC = () => {
  return (
    <div className={styles.right_header}>
      
      <div className={styles.signinlink}>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
      </div>
      
      <div className={styles.spanbutton}>
        <Link href="/signup">
        <button className="btnsignup">
          Sign Up
        </button>
        </Link>
      </div>

    </div>
  );
}


interface ModalWrapperI {
  displayModal: boolean,
  contentIndex: number,
  setdisplayModal?: any | void
}


export const ModalWrapper:FC<ModalWrapperI> = ({displayModal , contentIndex, setdisplayModal}) => {

  var customStyleWrapper:any = {
    "display": "unset"    
  }
  
  const handleModalWrapper:any =(event:any) => {
      console.log(event.target.id);
      if(event.target.id=="modalWrap"){
        setdisplayModal(!displayModal);
    
    }
  }

  if(!displayModal)
  {
    customStyleWrapper ={
      "display": "none",  
      "transition-delay": "0.5s"
      // "visibility" :"hidden"
    }
  }

  return(
    // <div className= {styles.modalwrapper} onClick={handleModalWrapper} id="modalWrap" style={customStyleWrapper}>
    <div className= {displayModal ? `${styles.modalwrapperOpening}`: `${styles.modalwrapperClosing}`} onClick={handleModalWrapper} id="modalWrap" style={customStyleWrapper}>
      <Modal displayModal={displayModal} contentIndex={contentIndex} />
  </div>
    )
  }
  

const Modal:FC<ModalWrapperI>=({displayModal, contentIndex}) =>{

  console.log("display model is ----->"+displayModal)


 return(

      // <div className={`flex ${styles.modal} `} id="modal"  >
      <div className = {displayModal ? `${styles.modalopening}`: `${styles.modalclosing}`}>
      <div className={`${styles.firstmodalchild} ${styles.modalchilds}`}>
        <div className={styles.name}>{modalData.modalcontent[contentIndex]["1stdiv_heading"]}</div>
        <p >{modalData.modalcontent[contentIndex]["1stdiv_para"]}</p>
      </div>
      
      <div className={`${styles.secondmodalchild} ${styles.modalchilds}`}>
      
        <h2>{modalData.modalcontent[contentIndex]["2nddiv_main_heading"]}</h2>
        <h3>{modalData.modalcontent[contentIndex]["2nddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["2nddiv_upper_para"]}</p>
        <hr className={styles.hruler} />
        <h3>{modalData.modalcontent[contentIndex]["2nddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["2nddiv_lower_para"]}</p>

      </div>

      <div className={`${styles.thirdrdmodalchild} ${styles.modalchilds}`}>
      <h2>{modalData.modalcontent[contentIndex]["3rddiv_main_heading"]}</h2>
        <h3>{modalData.modalcontent[contentIndex]["3rddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["3rddiv_upper_para"]}</p>
        <hr className={styles.hruler}/>
        <h3>{modalData.modalcontent[contentIndex]["3rddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["3rddiv_lower_para"]}</p>
      </div>
   </div>
   
 ) 
}



export default Header;
