import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import { useMutation } from '@apollo/client'
import DELETE_EMPLOYEE from "@graphql/DELETE_EMPLOYEE.graphql"
import EMPLOYEE_LIST from '@graphql/EMPLOYEE_LIST.graphql'

interface wrapperProps2 {
  flagDisplayFunc: React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee     : boolean;
  id : any
}

const DeleteEmployeePopUp:FC<wrapperProps2> = ({flagDisplayFunc,flagemployee,id}) => {
  const [ deleteEmployee] = useMutation(DELETE_EMPLOYEE,{
    refetchQueries: [
      {query: EMPLOYEE_LIST}
  ],
  })

  const handleDelete = (e : any) => {
    e.preventDefault();
    deleteEmployee({
      variables: {
        "deleteEmployeeId" : id
      }
    })
    flagDisplayFunc(!flagemployee)
  }
    return(
        <div className={styles.modalDeleteEmployee}>
          <div className={styles.formdiv}>
                <form onSubmit = {handleDelete}>
                <h1 className={styles.deleteHeading}>Delete this Employee Details</h1>
                <div className={styles.lowerdiv}>
                  <button type="submit" className={styles.deleteButton}>Delete</button>
                  <button className={styles.goBackButton} onClick={handleDelete} >Go Back</button>
                </div>
                </form>
          </div>
        </div>
   )
}

  export default DeleteEmployeePopUp;