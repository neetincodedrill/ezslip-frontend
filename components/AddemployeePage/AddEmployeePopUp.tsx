import React,{FC} from 'react'
import styles from "./Wrapper.module.css"
import {useState} from 'react';
import ModalChildWrapper from "./ModalChildWrapper";
import { useMutation } from "@apollo/client"
import ADD_EMPLOYEE from '@graphql/ADD_EMPLOYEE.graphql'
import EMPLOYEE_LIST from '@graphql/EMPLOYEE_LIST.graphql'

interface wrapperProps2 {
    flagDisplayFunc : React.Dispatch<React.SetStateAction<boolean>>;
    flagemployee : boolean;
}

const AddEmployeePopUp:FC<wrapperProps2> = ({flagDisplayFunc, flagemployee}) => {
    const [adddetailsSavedModal, setAdddetailsSavedModal] = useState(false)
    const [formdataget, setFormdataget] = useState({
        firstName: "",
        lastName: "",
        employeeCode: "",
        designation: "",
        panNumber: "",
        salary: "",
        dob: "",
        doj: "",
        epf: "",
        esi: "",
      } as any);
    const [esiChecked,setEsiChecked] = useState<boolean>(false)
    const [epfChecked,setEpfChecked] = useState<boolean>(false)
    const [addEmployee,{data,loading, error}] = useMutation(ADD_EMPLOYEE,{
        refetchQueries: [
            {query: EMPLOYEE_LIST}
          ],
    })

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdataget({
            ...formdataget,
            [e.target.name]: (e.target.value)
        })
    }
    
    const handleEpfChange = (event : any) => {
        setEpfChecked(current => !current);
    };

    const handleEsiChange = (event : any) => {
        setEsiChecked(current => !current);     
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        addEmployee({
            variables: {
              input:  {
                "firstName": formdataget.firstName,
                "lastName": formdataget.lastName,
                "employeeCode": formdataget.employeeCode,
                "designation": formdataget.designation,
                "panNumber": formdataget.panNumber,
                "salary": formdataget.salary,
                "dob": formdataget.dob,
                "doj": formdataget.doj,
                "epf": {
                "isEnabled": epfChecked,
                "number": formdataget.epf
                },
                "esi": {
                "isEnabled": esiChecked,
                "number": formdataget.esi
                }
              }
            }
        })
    }

    const handleEmployeeeResponse = () => {

            setAdddetailsSavedModal(!adddetailsSavedModal)
    }
  
    return(
    
        <div className={styles.modalAddEmployee}>
    
            <div className={styles.formdiv}>
    
                <form onSubmit={handleSubmit}>
    
                    <p className={styles.heading}>Add New Employee</p>
    
                    <input 
                        type="text"  
                        id="" 
                        name="firstName"
                        placeholder="First Name" 
                        value= {formdataget.firstName}
                        onChange={handle}
                        className={styles.input}
                    />
                    <input 
                        type="text"
                        placeholder="Last Name" 
                        name="lastName"
                        value= {formdataget.lastName}
                        onChange={handle}
                        className={styles.input}
                    />
                    <input 
                        type="text" 
                        placeholder="Employee Code" 
                        name="employeeCode"
                        value= {formdataget.employeeCode}
                        onChange={handle}
                        className={styles.input}
                    />
                    <input 
                        type="text" 
                        placeholder="Designation" 
                        name="designation"
                        value= {formdataget.designation}
                        onChange={handle}
                        className={styles.input}
                    />
                    <input 
                        type="text"
                        placeholder="Pan Number"
                        name="panNumber"
                        value= {formdataget.panNumber}
                        onChange={handle} 
                        className={styles.input}
                    />
                    <input 
                        type="number" 
                        placeholder="Salary" 
                        name="salary"
                        value= {formdataget.salary}
                        onChange={handle}
                        className={styles.input}
                    />
                    
                    <div className={styles.input}>
                    <label htmlFor="dateofbirth">Date Of Birth:</label>
                    <input 
                        type="date" 
                        id="dateofbirth" 
                        name="dob"
                        value= {formdataget.dob}
                        onChange={handle}
                    />
                    </div>
    
                    <div className={styles.input}>
                    <label htmlFor="dateofjoining">Date Of Joining:</label>
                    <input 
                        type="date"
                        id="dateofjoining" 
                        name="doj"
                        value= {formdataget.doj}
                        onChange={handle}
                    />
                    </div>
    
                    <div className={styles.input}> 
                    <input 
                        type="number"
                        placeholder="EPF"
                        name="epf" 
                        value= {formdataget.epf}
                        onChange={handle}
                        className={styles.input1}
                    />
                    <input 
                        type="checkbox"
                        value="false"
                        onChange={handleEpfChange}
                        id="epfChecked"
                        name="epfChecked"
                    />
                    </div>
    
                    <div className={styles.input}>
                    <input 
                        type="number"
                        placeholder="ESI" 
                        name="esi" 
                        value= {formdataget.esi}
                        onChange={handle}
                        className={styles.input1}
                    />
                    <input 
                        type="checkbox"
                        value="false"
                        onChange={handleEsiChange}
                        id="esiChecked"
                        name="esiChecked"
                     />
                    </div>
    
                    <button 
                        type="submit" 
                        className={styles.submitbutton} 
                        onClick={handleEmployeeeResponse}>Add to List
                    </button>  
  
    
                </form>
  
            </div>
            {adddetailsSavedModal && <ModalChildWrapper  flag={adddetailsSavedModal} functiondisplay={setAdddetailsSavedModal} targetChildModal="addDetailsSaved" flagDisplayFunc={flagDisplayFunc} flagemployee={flagemployee}/>}
                 
  
        </div>
    )
    }
  export default AddEmployeePopUp