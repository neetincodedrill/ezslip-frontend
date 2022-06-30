import React,{FC} from 'react'
import styles from "./Wrapper.module.css"



export const AddDetailsSaved = () => {
    return (
      <div className={styles.details}>
      <form onSubmit={(e)=>{e.preventDefault();}}>
        <h1 className={styles.detailsHeading}>Details saved Successfully</h1>
        <button type="submit" className={styles.detailsSubmitButton}>Continue</button>
      </form>
    </div>
    )
  }

  export default AddDetailsSaved