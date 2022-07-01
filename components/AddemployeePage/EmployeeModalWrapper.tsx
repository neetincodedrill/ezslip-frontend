import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import {useState} from 'react';
import { useMutation } from '@apollo/client';
import ADD_EMPLOYEE from '@graphql/ADD_EMPLOYEE.graphql'
import DELETE_EMPLOYEE from '@graphql/DELETE_EMPLOYEE.graphql'
import UPDATE_EMPLOYEE from '@graphql/UPDATE_EMPLOYEE.graphql'


const AddDetailsSaved = () => {
  return (
    <div className={styles.details}>
    <form onSubmit={(e)=>{e.preventDefault();}}>
      <h1 className={styles.detailsHeading}>Details saved Successfully</h1>
      <button type="submit" className={styles.detailsSubmitButton}>Continue</button>
    </form>
  </div>
  )
}

const EditDetailsSaved = () => {
  return (
    <div className={styles.details}>
    <form onSubmit={(e)=>{e.preventDefault();}}>
      <h1 className={styles.detailsHeading}>Details saved Successfully</h1>
      <button type="submit" className={styles.detailsSubmitButton}>Continue</button>
    </form>
  </div>
  )
}


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

     { flag && targetChildModal==="addDetailsSaved" && <AddDetailsSaved /> }
     { flag && targetChildModal==="editDetailsSaved" && <EditDetailsSaved /> }
    </div>
  )
}


const AddEmployeePopUp = () => {
  const [adddetailsSavedModal, setAdddetailsSavedModal] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [employeeCode, setEmployeeCode] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [doj, setDoj] = useState<string>("");
  const [epf,setEpf] = useState<object>({
    number : '',
    isEnabled : false
  });
  const [esi,setEsi] = useState<object>({
    number : '',
    isEnabled : false
  });
  const [checked, setChecked] = useState(false); 

  const handleChange = (e : any) => { 
    setChecked(true)
    console.log('The checkbox was toggled'); 
    
  }; 
  console.log(checked)
  // console.log(adddetailsSavedModal)

  return(
  
      <div className={styles.modalAddEmployee}>
        <div className={styles.formdiv}>
              <form onSubmit={(e)=>{e.preventDefault();}}>
  
                  <p className={styles.heading}>Add New Employee</p>
  
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="First Name" 
                    value={firstName}  
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.input}
                  />
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Last Name" 
                    value={lastName}  
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.input}
                  />
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Employee Code" 
                    value={employeeCode}  
                    onChange={(e) => setEmployeeCode(e.target.value)}
                    className={styles.input}
                  />
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Designation" 
                    value={designation}  
                    onChange={(e) => setDesignation(e.target.value)}
                    className={styles.input}
                  />
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Pan Number"
                    value={panNumber}  
                    onChange={(e) => setPanNumber(e.target.value)} 
                    className={styles.input}
                  />
                  <input 
                    type="number" 
                    name="" 
                    id="" 
                    placeholder="Salary" 
                    value={salary}  
                    onChange={(e) => setSalary(e.target.value)}
                    className={styles.input}
                  />
                  
                  <div className={styles.input}>
                  <label htmlFor="dateofbirth">Date Of Birth:</label>
                  <input 
                    type="date" 
                    name="" 
                    id="dateofbirth" 
                    value={dob}  
                    onChange={(e) => setDob(e.target.value)}
                  />
                  </div>
  
                  <div className={styles.input}>
                  <label htmlFor="dateofjoining">Date Of Joining:</label>
                  <input 
                    type="date" 
                    name="" 
                    id="dateofjoining" 
                    value={doj}  

                    onChange={(e) => setDob(e.target.value)}
                  />
                  </div>
  
                  {/* <div className={styles.input}> */}
                  <div className={styles.input}> 
                  <input 
                    type="number" 
                    name="" 
                    id="" 
                    placeholder="EPF" 
                    // value={name}  
                    // onChange={(e) => setName(e.target.value)}
                    className={styles.input1}
                  />
                  <input 
                    type="checkbox" 
                    name="" id="" 
                    onChange={handleChange}
                    // onChange={(e) => setName(e.target.value)}
                     />
                  </div>
  
                  <div className={styles.input}>
                  <input type="number" name="" id="" placeholder="ESI" className={styles.input1}
                  //  value={name}  
                  //  onChange={(e) => setName(e.target.value)}
                  />
                  <input type="checkbox" name="" id=""
                  //  value={name}  
                  //  onChange={(e) => setName(e.target.value)} 
                  />
                  </div>
  
  
                  <button type="submit" className={styles.submitbutton} onClick={()=> {setAdddetailsSavedModal(!adddetailsSavedModal)}}>Add to List</button>  

  
              </form>

          </div>
                {adddetailsSavedModal && <ModalChildWrapper  flag={adddetailsSavedModal} functiondisplay={setAdddetailsSavedModal} targetChildModal="addDetailsSaved" />}
               

      </div>
  )
  }
  

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

                {editDetailsSavedModal && <ModalChildWrapper  flag={editDetailsSavedModal} functiondisplay={setEditDetailsSavedModal} targetChildModal="editDetailsSaved" />}

            </form>
        </div>

    </div>
)
}




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