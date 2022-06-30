import React,{FC} from 'react'
import styles from "./Wrapper.module.css"

const DeleteEmployeePopUp = () => {
    return(
        <div className={styles.modalDeleteEmployee}>
          <div className={styles.formdiv}>
                <form onSubmit={(e)=>{e.preventDefault();}}>
                <h1 className={styles.deleteHeading}>Delete this Employee Details</h1>
                <div className={styles.lowerdiv}>
                  <button type="submit" className={styles.deleteButton}>Delete</button>
                  <button type="submit" className={styles.goBackButton}>Go Back</button>
                </div>
                </form>
          </div>
        </div>
   )
  }


  export default DeleteEmployeePopUp;