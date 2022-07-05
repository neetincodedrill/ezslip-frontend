import React from 'react'
import styles from './RightNewComponent.module.css'
import Image from 'next/image';
import  EMPLOYEE_NAMELIST from "@graphql/EMPLOYEE_NAMELIST.graphql"
import { useQuery } from '@apollo/client/react/hooks';
import { useEffect,useState } from 'react';
import Slip from './Slip';

const nameList = ["gurjant panesar","Go gates", "Spaces khan", "The pianist", "Robert Patinson", "Typescript Einstein","Albert Einstein","gurjant panesar","Go gates", "Spaces khan", "The pianist", "Robert Patinson", "Typescript Einstein","Albert Einstein"]

const RightNewComponent = () => {
  
  const {data, loading, error} = useQuery(EMPLOYEE_NAMELIST,  {fetchPolicy: 'network-only'});

  const [employeeNames, setEmployeesName] = useState();


  useEffect(()=>{
    setEmployeesName(data);
  },[loading])


  if(data) console.log("data",data)

return (
  <div className={styles.main}>

      <div className={styles.firstline}>
          <div className={styles.firstheadingdiv}>
              <div className={styles.headingName}>
                Employee’s Name
              </div>

              <div className={styles.parent2}>
                <div className={styles.parent1}>
                      <div className={styles.namesdiv}>
                        {/* {data?.employeeNameList?.employees?.map((val:any,index:any)=>( */}
                        { nameList.map ((val:any,index:any)=>(
                          <div className={styles.name} key={index}>
                            {/* {val.name} */}
                            {val}
                          </div>
                        ))}
                      </div>
                </div>
              </div>
          </div>

          <div className={styles.secondHeading}>
          <p>Employee Code</p>
          <div className={styles.searchdiv}>
            <input type="search" name="" id="" placeholder="AFX89X6" className={styles.searchinput}/>
            <div className={styles.searchIcon}>
              <Image src="/assets/images/Search.png" 
              layout="fill"/>
            </div>
          </div>
          </div>
      </div>

      <div className={styles.secondline}>
        <div className={styles.designationDiv}>
          <input type="text" name="designation" id="designation" placeholder='Designation' className={styles.designationinput}/>
        </div>

        <div className={styles.pancardDiv}>
          <input type="text" name="pancard" id="pancard" placeholder='Pan Card number' className={styles.pancardInput}/>
        </div>
      </div>

      <div className={styles.thirdline}>
        <div className={styles.designationDiv}>
          <input type="text" name="dateofjoining" id="dateofjoining" placeholder='Date of Joining' className={styles.designationinput}/>
        </div>

        <div className={styles.pancardDiv}>
          <input type="text" name="salary" id="salary" placeholder='Salary' className={styles.pancardInput}/>
        </div>
     </div>

     <div className={styles.fourthline}>
        <div className={styles.calculatebuttondiv}>
          <button type="submit" className={styles.calculatebutton}>Calculate</button>
        </div>         
     </div>

    <div className={styles.slipdiv}>
     <Slip />
     </div>
  </div>


)
}

export default RightNewComponent