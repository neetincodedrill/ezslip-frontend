

import Image from 'next/image'
import React,{FC} from 'react'
import styles from '../styles/RightHistoryComponent.module.css'
import styles2 from './RightEmployeesComponent.module.css'
// import { Table } from 'app/core/components/Table';

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


const Tbody = () => {
    return(
        tableDataObj.map ( ( value , index ) => (   

    <>
    
            <tr key={index}>
                <td className={styles.sametd}>{value.sno}</td>
                <td className={styles.sametd}>{value.name}</td>
                <td className={styles.sametd}>{value.code}</td>
                <td className={styles.sametd}>{value.last_edition}</td>
                <td className={styles.sametd}>{value.slipshared}</td>
                <td className={styles.sametd}><Image src="/assets/images/create.png" 
                alt="hamburger"
                height="14"
                width="18"/></td>
                 <td className={styles.sametd}><Image src="/assets/images/delete.png" 
                alt="hamburger"
                height="14"
                width="18"/></td>
            </tr>
        
            <tr>
                <td colSpan={6}> <hr className={styles.hrulergrey}/> </td>
            </tr>


    </>
    
    
    )
        
    ) 
    )
}

const RightEmployeesComponent = () => {
  return (
    

        <div className={styles.historycomponent}>
            <div className={styles2.firstLine}>

                <h1>Employees List</h1> 
                <div >
                   
                    <button className={styles2.buttonAddemployee}>
                    Add Employee
                    <Image src="/assets/images/User add.svg"
                    height="24"
                    width="24"
                    alt="UserAdd"
                    />
                    </button>
                   
                </div>
            </div>
            <div className={styles.tablediv}>
    
           
            <table style={{"width":"100%", 
            "textAlign": "left"}}>
                <thead >
                    <tr className={styles.tablehead}>
                        <th className={styles.sno}>S. No.</th>
                        <th className={styles.name}>Name</th>
                        <th className={styles.code}>Code</th>
                        <th className={styles.designation}>Designation</th>
                        <th className={styles.salary}>Salary</th>
                        <th className={styles.edit}> </th>
                        <th className={styles.delete}> </th>
                    </tr>
                    <tr>
                        <th colSpan={6}> <hr className={styles.hruler}/> </th>
                    </tr> 
                    {/* <div style={{"width":"100%"}}> */}
                    {/* <hr className={styles.hruler}/> */}
                    {/* </div> */}
                </thead>
    
                <tbody>
    
                    < Tbody />
                   
                </tbody>
    
             
            </table>
            </div>
        </div>
      )
    }
  

export default RightEmployeesComponent