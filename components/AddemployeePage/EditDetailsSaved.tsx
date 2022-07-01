import React,{FC} from 'react'
import styles from "./Wrapper.module.css"

interface props {
  flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee : boolean
  functiondisplay:  React.Dispatch<React.SetStateAction<boolean>>;
  targetChildModal : string;
  firstName? : string;
  lastName? : string
}


const EditDetailsSaved:FC<props> = ({flagDisplayFunc, flagemployee, functiondisplay, targetChildModal,firstName,lastName}) => {
    return (
      <div className={styles.details}>
        <form>
          <h1 className={styles.detailsHeading}>Details saved Successfully</h1>
          <button type="submit" className={styles.detailsSubmitButton} 
           onClick ={()=>{
            flagDisplayFunc(!flagemployee);
            functiondisplay(!targetChildModal);
          }}
          >Continue</button>
        </form>
      </div>
    )
}

export default EditDetailsSaved