import React,{FC} from 'react'
import styles from "./Wrapper.module.css"

import AddEmployeePopUp from './AddEmployeePopUp';
import EditEmployeePopUp from './EditEmployeePopUp';
import DeleteEmployeePopUp from './DeleteEmployeePopUp';



interface wrapperProps {
  flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee? : boolean;
  targetModal: string
}

const EmployeeModalWrapper:FC<wrapperProps> = ({flagDisplayFunc,flagemployee, targetModal}) => {
  return (
    <div className={styles.wrapper} id="wrapper" onClick={(e: any)=>{

      if(e.target.id === "wrapper") {
        flagDisplayFunc(!flagemployee);
      }

    }}>
      
        {(flagemployee && targetModal === "add") && <AddEmployeePopUp />}
      
        {(flagemployee && targetModal === "edit") && <EditEmployeePopUp />}

        {(flagemployee && targetModal === "delete") && <DeleteEmployeePopUp />}


      
    </div>
  )
}

export default EmployeeModalWrapper
