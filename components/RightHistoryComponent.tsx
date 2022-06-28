import Image from 'next/image'
import React,{FC,useState,useEffect} from 'react'
import styles from '../styles/RightHistoryComponent.module.css'
import { useQuery } from '@apollo/client';
import EMPLOYEE_HISTORY from '@graphql/EMPLOYEE_HISTORY.graphql';

const RightHistoryComponent:FC = () => {
   const { data, loading, error } = useQuery(EMPLOYEE_HISTORY)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const employeeData : [] = data
    if(employeeData){
      console.log(employeeData)
   }else{
       console.log('No employees') 
   }


   
   return (
    <div className={styles.historycomponent}>
        <h1>History</h1>
        <table style={{"width":"100%", 
        "textAlign": "left"}}>
            <thead >
                <tr className={styles.tablehead}>
                    <th className={styles.sno}>S. No.</th>
                    <th className={styles.name}>Name</th>
                    <th className={styles.code}>Code</th>
                    <th className={styles.lastedition}>Last Edition</th>
                    <th className={styles.slipshared}> SlipShared</th>
                    <th className={styles.hamburger}></th>
                </tr>
                <tr>
                    <th colSpan={6}> <hr className={styles.hruler}/> </th>
                </tr>
            </thead>

            <tbody>   
            
            </tbody>
        </table>
    </div>
  )
}



export default RightHistoryComponent