import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import {useState} from 'react';
import ModalChildWrapper from './ModalChildWrapper';


const EditEmployeePopUp = () => {
    const [editDetailsSavedModal, setEditDetailsSavedModal] = useState(false);
  return(
  
      <div className={styles.modalAddEmployee}>
  
          <div className={styles.formdiv}>
  
              <form onSubmit={(e)=>{e.preventDefault();}}>
  
                  <p className={styles.heading}>Edit Details</p>
  
                  <input type="text" name="" id="" placeholder="First Name" className={styles.input}/>
                  <input type="text" name="" id="" placeholder="Last Name" className={styles.input}/>
                  <input type="text" name="" id="" placeholder="Employee Code" className={styles.input}/>
                  <input type="text" name="" id="" placeholder="Designation" className={styles.input}/>
                  <input type="text" name="" id="" placeholder="Pan Number" className={styles.input}/>
                  <input type="number" name="" id="" placeholder="Salary" className={styles.input}/>
                  
                  <div className={styles.input}>
                  <label htmlFor="dateofbirth">Date Of Birth:</label>
                  <input type="date" name="" id="dateofbirth" />
                  </div>
  
                  <div className={styles.input}>
                  <label htmlFor="dateofjoining">Date Of Joining:</label>
                  <input type="date" name="" id="dateofjoining" />
                  </div>
  
                  <div className={styles.input}>
                  <input type="number" name="" id="" placeholder="EPF" className={styles.input1} style={{"marginBottom":"unset !important"}}/>
                  <input type="checkbox" name="" id="" />
                  </div>
  
                  <div className={styles.input}>
                  <input type="number" name="" id="" placeholder="ESI" className={styles.input1} style={{"marginBottom":"unset !important"}}/>
                  <input type="checkbox" name="" id="" />
                  </div>
  
  
                  <button type="submit" className={styles.submitbutton} onClick={()=> {setEditDetailsSavedModal(!editDetailsSavedModal)}}>Save</button>  
  
                  {editDetailsSavedModal && <ModalChildWrapper flag={editDetailsSavedModal} functiondisplay={setEditDetailsSavedModal} targetChildModal="editDetailsSaved" />}
  
              </form>
          </div>
  
      </div>
  )
  }

  export default EditEmployeePopUp;