import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import {useState} from 'react';
import AddDetailsSaved from './AddDetailsSaved';
import EditDetailsSaved from './EditDetailsSaved';


interface wrapperChildProps {
    // flag : React.Dispatch<React.SetStateAction<boolean>>;
    flag : boolean;
    functiondisplay : React.Dispatch<React.SetStateAction<boolean>>;
    targetChildModal? : string
  }

const ModalChildWrapper:FC<wrapperChildProps> = ({flag, functiondisplay, targetChildModal }) => {
    return (
      <div className={styles.modalChildWrapper} id="modalChildWrapper" onClick={
        
        (e: any)=>{
  
        if(e.target.id === "modalChildWrapper") {
          functiondisplay(!flag);
        }
  
      }}>
  
       { flag && targetChildModal==="addDetailsSaved" && <AddDetailsSaved/> }
       { flag && targetChildModal==="editDetailsSaved" && <EditDetailsSaved /> }
      </div>
    )
  }

export default ModalChildWrapper