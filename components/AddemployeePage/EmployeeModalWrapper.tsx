// import React,{FC} from 'react'
// import styles from "./Wrapper.module.css"

// import AddEmployeePopUp from './AddEmployeePopUp';
// import EditEmployeePopUp from './EditEmployeePopUp';
// import DeleteEmployeePopUp from './DeleteEmployeePopUp';



// interface wrapperProps {
// flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
// flagemployee? : boolean;
// targetModal: string
// }

// const EmployeeModalWrapper:FC<wrapperProps> = ({flagDisplayFunc,flagemployee, targetModal}) => {
// return (
//   <div className={styles.wrapper} id="wrapper" onClick={(e: any)=>{

//     if(e.target.id === "wrapper") {
//       flagDisplayFunc(!flagemployee);
//     }

//   }}>
    
//       {(flagemployee && targetModal === "add") && <AddEmployeePopUp flagDisplayFunc = {flagDisplayFunc} flagemployee={flagemployee}/>}
    
//       {(flagemployee && targetModal === "edit") && <EditEmployeePopUp flagDisplayFunc = {flagDisplayFunc} flagemployee={flagemployee} />}

//       {(flagemployee && targetModal === "delete") && <DeleteEmployeePopUp flagDisplayFunc = {flagDisplayFunc} flagemployee={flagemployee} />}


    
//   </div>
// )
// }

// export default EmployeeModalWrapper


import React,{FC} from 'react'
import styles from "./Wrapper.module.css"

import AddEmployeePopUp from './AddEmployeePopUp';
import EditEmployeePopUp from './EditEmployeePopUp';
import DeleteEmployeePopUp from './DeleteEmployeePopUp';



interface wrapperProps {
  flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee? : boolean;
  targetModal: string;
  id? : any
}

const EmployeeModalWrapper:FC<wrapperProps> = ({flagDisplayFunc,flagemployee, targetModal,id}) => {
  return (
    <div className={styles.wrapper} id="wrapper" onClick={(e: any)=>{

      if(e.target.id === "wrapper") {
        flagDisplayFunc(!flagemployee);
      }

    }}>
      
        {(flagemployee && targetModal === "add") && <AddEmployeePopUp  flagemployee = {flagemployee} flagDisplayFunc = {flagDisplayFunc}/>}
      
        {(flagemployee && targetModal === "edit") && <EditEmployeePopUp flagemployee = {flagemployee} flagDisplayFunc = {flagDisplayFunc}  id={id} />}

        {(flagemployee && targetModal === "delete") && <DeleteEmployeePopUp flagemployee = {flagemployee} flagDisplayFunc = {flagDisplayFunc} id={id}/>}


      
    </div>
  )
}

export default EmployeeModalWrapper