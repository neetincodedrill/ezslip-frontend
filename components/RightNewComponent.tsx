import React,{FC} from 'react'
import styles from './RightNewComponent.module.css'
import Image from 'next/image';
import  EMPLOYEE_NAMELIST from "@graphql/EMPLOYEE_NAMELIST.graphql"
import  GET_EMPLOYEE_BY_CODE from "@graphql/GET_EMPLOYEE_BY_CODE.graphql"
import { useQuery } from '@apollo/client/react/hooks';
import { useEffect,useState } from 'react';
import Slip from './Slip';
import { CookieValueTypes, getCookie } from 'cookies-next';
import { AiOutlineSearch } from 'react-icons/ai';

interface props {
  employeeCode : string,
}

const RightNewComponent:FC<props> = ({employeeCode}) => {

  const [ isCalculateButtonClicked, setIsCalculateButtonClicked ] = useState<boolean>(false)
  
  const [empCode, setempCode] =useState("");
  const [employeeNames, setEmployeesName] = useState();

  const {data:datanamelist, loading:loadingnamelist , error: errornamelist} = useQuery(EMPLOYEE_NAMELIST,  {fetchPolicy: 'network-only'});

  const {data:datacode, loading: loadingcode, error: errorcode, refetch } = useQuery(GET_EMPLOYEE_BY_CODE,{
    variables :{
      employeeCode 
    },
    fetchPolicy: 'network-only'} )

  useEffect(()=>{
    setEmployeesName(datanamelist);
  },[loadingnamelist])


  var name1="";

  const runqueryGetEmpByCode = () => {
    refetch({
      employeeCode : empCode
    })
  }

  console.log(datacode)
  console.log(datanamelist);
  
  const calculatefunction = (e:any) => {
    e.preventDefault();

    setIsCalculateButtonClicked(true)


  }

return (
  <div className={styles.main}>
  <div className={styles.formdiv}>

 
  <form onSubmit={calculatefunction}>    
      <div className={styles.firstline}>
          <div className={styles.firstheadingdiv}>
              <div className={styles.headingName}>
                Employee’s Name
              </div>

              <div className={styles.parent2}>
              <input type="text" name="pancard" id="pancard" placeholder='Employee name' className={styles.name}  style={{"border":"none"}} value={datacode?.getEmployeeByEmpCode?.firstName + " " + datacode?.getEmployeeByEmpCode?.lastName}/> 
                <div className={styles.parent1}>

                      <div className={styles.namesdiv}>

                        {datanamelist?.employeeNameList?.employees?.map((val:any,index:any)=>(
                          // <div className={styles.name} key={index} id={"name"+index}>
                            <option value={val.name} className={styles.name}>
                            {/* {val.name === name1 && <div style={{"backgroundColor": "rgba(0, 0, 0, 0.07)"}}>{val.name}</div>} */}
                            {val.name}
                            </option>
                        ))}

                      </div>
                </div>
              </div>
          </div>

          <div className={styles.secondHeading}>
          <p>Employee Code</p>
          <div className={styles.searchdiv}>
            <input type="search" name="" id="" placeholder="AFX89X6" className={styles.searchinput} value={empCode} onChange={(e)=> { setempCode(e.target.value)}}/>
            <div className={styles.searchIcon}>
              <AiOutlineSearch onClick={runqueryGetEmpByCode}/>
            </div>
          </div>
          </div>
      </div>

      <div className={styles.secondline}>
        <div className={styles.designationDiv}>
          <input type="text" name="designation" id="designation" placeholder='Designation'  className={styles.designationinput} value={datacode?.getEmployeeByEmpCode?.designation} />
        </div>

        <div className={styles.pancardDiv}>
          <input type="text" name="pancard" id="pancard" placeholder='Pan Card number' className={styles.pancardInput}  value={datacode?.getEmployeeByEmpCode?.panNumber} />
        </div>
      </div>

      <div className={styles.thirdline}>
        <div className={styles.designationDiv}>
          <input type="text" name="dateofjoining" id="dateofjoining" placeholder='Date of Joining' className={styles.designationinput} value={datacode?.getEmployeeByEmpCode?.doj} />
        </div>

        <div className={styles.pancardDiv}>
          <input type="text" name="salary" id="salary" placeholder='Salary' className={styles.pancardInput} value={datacode?.getEmployeeByEmpCode?.panNumber} />
        </div>
     </div>

     <div className={styles.fourthline}>
        <div className={styles.calculatebuttondiv}>
          <button type="submit" className={styles.calculatebutton}>Calculate</button>
        </div>         
     </div>

     </form>

     </div>

      <div className={styles.slipdiv} >
      {
        isCalculateButtonClicked  && <Slip datacode={datacode}/>
      }
      </div>

      {
        isCalculateButtonClicked &&
      <div className={styles.buttondiv}>
          <div className={styles.savebuttondiv}>
            <button className={styles.savebutton}>  
              Save  
              {/* <Image src="/ezslip-frontend/public/assets/images/Bookmark.svg" /> */}
              <Image src="/assets/images/Bookmark.svg" 
              height="24"
              width="24"/>
            </button>
          </div>

          <div className={styles.downloadbuttondiv}>
            <button className={styles.downloadbutton}>  
              Download
              {/* <Image src="/ezslip-frontend/public/assets/images/Download.svg" /> */}
              <Image src="/assets/images/Download.svg" 
              height="24"
              width="24"/>
            </button>
          </div>

          <div className={styles.sharebuttondiv}>
            <button className={styles.sharebutton}>  
              Share  
              {/* <Image src="/ezslip-frontend/public/assets/images/Arrow down.svg" /> */}
              <Image src="/assets/images/Arrow down.svg" 
              height="24"
              width="24"/>
            </button>
          </div>
      </div>
}
  </div>


)
}

export default RightNewComponent