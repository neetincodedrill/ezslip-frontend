import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import {useState} from 'react';
import AddDetailsSaved from './AddDetailsSaved';
import EditDetailsSaved from './EditDetailsSaved';

interface wrapperChildProps {
  flag : boolean;
  functiondisplay : React.Dispatch<React.SetStateAction<boolean>>;
  targetChildModal : string
  flagDisplayFunc :React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee : boolean
}

const ModalChildWrapper:FC<wrapperChildProps> = ({flag, functiondisplay, targetChildModal, flagDisplayFunc, flagemployee }) => {
  return (
    <div className={styles.modalChildWrapper} id="modalChildWrapper" onClick={
      (e: any)=>{
      if(e.target.id === "modalChildWrapper") {
        functiondisplay(!flag);
      }
    }}>
      { flag && targetChildModal==="addDetailsSaved" && <AddDetailsSaved flagDisplayFunc={flagDisplayFunc} flagemployee={flagemployee}  functiondisplay={functiondisplay} targetChildModal={targetChildModal} /> }
      { flag && targetChildModal==="editDetailsSaved" && <EditDetailsSaved flagDisplayFunc={flagDisplayFunc} flagemployee={flagemployee}  functiondisplay={functiondisplay} targetChildModal={targetChildModal}/> }
    </div>
  )
}

export default ModalChildWrapper