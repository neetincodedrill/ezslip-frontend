import Image from 'next/image'
import React,{FC} from 'react'
import styles from './RightHistoryComponent.module.css'
import styles2 from './RightEmployeesComponent.module.css'
import {useState} from 'react';
import { ModalWrapper } from './Header';
import EmployeeModalWrapper from './AddemployeePage/EmployeeModalWrapper';

interface tableData {

        "sno"  :  number,
        "name" : string,
        "code" : number,
        "last_edition": string,
        "slipshared": string,
        "icon": string,    
}

    const tableDataObj : tableData[] = [
    {
        "sno"  :  1,
        "name" : "Albert Einstein",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  2,
        "name" : "Typescript Einstein",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  3,
        "name" : "Robert Patinson",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  4,
        "name" : "The pianist",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  5,
        "name" : "Spaces khan",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  6,
        "name" : "Go gates",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  7,
        "name" : "gurjant panesar",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },
     {
        "sno"  :  1,
        "name" : "Albert Einstein",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  2,
        "name" : "Typescript Einstein",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  3,
        "name" : "Robert Patinson",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  4,
        "name" : "The pianist",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  5,
        "name" : "Spaces khan",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  6,
        "name" : "Go gates",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    },

    {
        "sno"  :  7,
        "name" : "gurjant panesar",
        "code" : 35245345      ,
        "last_edition":"DD/MM/YYYY",
        "slipshared": "DD/MM/YYYY",
        "icon": "something"
    }
]


const RightEmployeesComponent:FC = () => {

  const [isAddEmployeebuttonclicked, setIsAddEmployeebuttonclicked] = useState(false);
  const [isEditEmployeebuttonclicked, setIsEditEmployeebuttonclicked] = useState(false);
  const [isDeleteEmployeebuttonclicked, setIsDeleteEmployeebuttonclicked] = useState(false);

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
                {/* <div className={styles.tablediv}> */}
                
                <div className={styles2.table2parentdiv}>
                    <div className={styles2.table2childdiv}>
                        <div className={styles2.table2child2div}>

                <table style={{"width":"100%", 
            "textAlign": "left"}}>
                {

               
                tableDataObj.map ( ( value , index ) => (   

    <>
    

        <tr key={index}>
            <td className={styles2.snotd}>{value.sno}</td>
            <td className={styles2.nametd}>{value.name}</td>
            <td className={styles2.codetd}>{value.code}</td>
            <td className={styles2.designationtd}>{value.last_edition}</td>
            <td className={styles2.salarytd}>{value.slipshared}</td>
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
            
        
            <div className="">  <Image src="/assets/images/delete.png" 
            alt="hamburger"
            height="18"
            width="18"
            onClick={()=>{
              setIsDeleteEmployeebuttonclicked(!isDeleteEmployeebuttonclicked)
            }}/></div>
          
        
            </td>
        </tr>
    
        <tr>
            <td colSpan={7}> <hr className={styles.hrulergrey}/> </td>
        </tr>

        </>



))

}
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