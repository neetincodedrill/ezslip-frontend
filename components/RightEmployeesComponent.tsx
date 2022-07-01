import Image from 'next/image'
import React,{FC} from 'react'
import styles from './RightHistoryComponent.module.css'
import styles2 from './RightEmployeesComponent.module.css'
import {useState} from 'react';
import EmployeeModalWrapper from './AddemployeePage/EmployeeModalWrapper';
import { useQuery } from '@apollo/client'
import EMPLOYEE_LIST from '@graphql/EMPLOYEE_LIST.graphql'


const RightEmployeesComponent:FC = () => {
  const [isAddEmployeebuttonclicked, setIsAddEmployeebuttonclicked] = useState(false);
  const [isEditEmployeebuttonclicked, setIsEditEmployeebuttonclicked] = useState(false);
  const [isDeleteEmployeebuttonclicked, setIsDeleteEmployeebuttonclicked] = useState(false);
  
  const { data, loading, error } = useQuery(EMPLOYEE_LIST);
  console.log(data?.employeeList?.employees)

  return (
        <div className={styles.historycomponent}>
            <div className={styles2.firstLine}>
            <h1>Employees List</h1> 
            <div >
                
                <button className={styles2.buttonAddemployee}
                onClick={()=>{
                    setIsAddEmployeebuttonclicked(!isAddEmployeebuttonclicked)
                }}>
                Add Employee
                <Image src="/assets/images/User add.svg"
                height="24"
                width="24"
                alt="UserAdd"
                />
                </button>            
            </div>
        </div>
           
        <table style={{"width":"100%", 
        "textAlign": "left"}}>
            
            <tr className={styles.tablehead}>
                <th className={styles2.sno}>S. No.</th>
                <th className={styles2.name}>Name</th>
                <th className={styles2.code}>Code</th>
                <th className={styles2.designation}>Designation</th>
                <th className={styles2.salary}>Salary</th>
                <th className={styles2.edit}></th>
                <th className={styles2.delete}> </th>
            </tr>
            <tr>
                <th colSpan={7}> <hr className={styles.hruler}/> </th>
            </tr>     
        </table>     
        <div className={styles2.table2parentdiv}>
            <div className={styles2.table2childdiv}>
                <div className={styles2.table2child2div}>

        <table style={{"width":"100%", "textAlign": "left"}}>
        <tbody>
                {   
                data?.employeeList?.employees.map ( ( employee : any , index : any ) => (   
            <>
                <tr key={index}>
                    <td className={styles2.snotd}>{index + 1}</td>
                    <td className={styles2.nametd}>{employee.firstName + " " + employee.lastName}</td>
                    <td className={styles2.codetd}>{employee.employeeCode}</td>
                    <td className={styles2.designationtd}>{employee.designation}</td>
                    <td className={styles2.salarytd}>{employee.salary}</td>
                    <td className={styles2.edittd}>
                    <Image src="/assets/images/create.png" 
                        alt="hamburger"
                        height="18"
                        width="18" 
                        onClick={()=>{
                        setIsEditEmployeebuttonclicked(!isEditEmployeebuttonclicked);
                    }} />
                    </td>
                
                <td className={styles2.deletetd}>     
                    <div className=""> 
                        <Image src="/assets/images/delete.png" 
                            alt="hamburger"
                            height="18"
                            width="18"
                            onClick={()=>{
                            setIsDeleteEmployeebuttonclicked(!isDeleteEmployeebuttonclicked)
                        }}/>
                    </div>
                </td>
            </tr>
            
            <tr>
                <td colSpan={7}> <hr className={styles.hrulergrey}/> </td>
            </tr>
        </>
        ))
    }
    </tbody>
        </table>
        </div>
        </div>
        </div>     
            {isAddEmployeebuttonclicked && <EmployeeModalWrapper flagDisplayFunc={setIsAddEmployeebuttonclicked}  flagemployee={isAddEmployeebuttonclicked} targetModal="add"/>}
            {isEditEmployeebuttonclicked && <EmployeeModalWrapper flagDisplayFunc={setIsEditEmployeebuttonclicked}  flagemployee={isEditEmployeebuttonclicked} targetModal="edit"/>}
            {isDeleteEmployeebuttonclicked && <EmployeeModalWrapper flagDisplayFunc={setIsDeleteEmployeebuttonclicked}  flagemployee={isDeleteEmployeebuttonclicked} targetModal="delete"/>}
        </div>
    )
}
  

export default RightEmployeesComponent;