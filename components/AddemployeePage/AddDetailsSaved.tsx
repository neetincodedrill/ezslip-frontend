import Link from 'next/link';
import React,{FC} from 'react'
import styles from "./Wrapper.module.css"

interface props {
  flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee : boolean
  functiondisplay:  React.Dispatch<React.SetStateAction<boolean>>;
  targetChildModal : string 
}


const AddDetailsSaved:FC<props> = ({flagDisplayFunc, flagemployee, functiondisplay, targetChildModal}) => {
    return (
      <div className={styles.details}>
      <form >
        <h1 className={styles.detailsHeading}>Details saved Successfully</h1>
        <Link href="/employeesPage">
          <button type="submit" className={styles.detailsSubmitButton} onClick ={()=>{
            flagDisplayFunc(!flagemployee);
            functiondisplay(!targetChildModal);
          }}>Continue</button>
        </Link>
      </form>
    </div>
    )
  }

  export default AddDetailsSaved