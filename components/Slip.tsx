import React,{FC} from 'react'
import styles from "./Slip.module.css";
import Image from 'next/image'
import { Input } from './Signinpage/SignInForm';

interface Islips {
  datacode: object
}

const Slip:FC<Islips> = ({datacode}) => {
  // const []
  console.log(datacode);
  const name = datacode?.getEmployeeByEmpCode?.firstName + " " + datacode?.getEmployeeByEmpCode?.lastName;
return (
<div className={styles.slip}>
  <div className={styles.main}>
    <div className={styles.firstline}>

     <div className={styles.logoDiv}>
              <Image
              src="/assets/images/codedrill_logo.png"
              width="164px"
              height="43px"
              />  
      </div>

      <div className={styles.firstlinerightdiv}>
        <div className={styles.firstrightdiv}>
                  <div className={styles.upperdiv}>
                      <div className="">

                        <Image
                        src="/assets/images/User.png"
                        width="18"
                        height="18"
                        />  

                      </div>

                      <p className={styles.para}>+91 8326897122, 101 92198</p>

                  </div>

                  <div className={styles.lowerdiv}>
                    <div className="">

                      <Image
                      src="/assets/images/Mail.png"
                      width="18"
                      height="18"
                      />
                    </div>

                    <p className={styles.para}>mail@codedrillinfotech.com</p>

                  </div>


        </div>

        <div className={styles.secondrightdiv}>
        
            <div className={styles.image}>

                  <Image
                  src="/assets/images/mappin.png"
                  width="18"
                  height="18"
                  />

            </div>

            <div className={styles.addressdiv}>
                <p>E-202,Ind Area,</p> 
                <p> Phase-8B </p>
                <p>Mohali, Punjab, INDIA</p>  
            </div>

        </div>
      </div>
    </div>

    <div className={styles.payslipdiv}>
        <p>Payslip</p>
    </div>

    <div className={styles.employeeinformation}>
      <p>Employee Information</p>

      <div className={styles.infodiv}>

        <div className={styles.leftinfodiv}>
          
          <div className={styles.labelsdiv}>
            <div className={styles.label}>Name of the Employee</div>
            <div className={styles.label}>Employee Code</div>
            <div className={styles.label}>Date of Joining</div>
            <div className={styles.label}>Designation</div>
          </div>

          <div className={styles.inputs}>
              <input type="text" name="" id="" placeholder='Loid Forger' className={styles.input}  value = {name}/>
              <input type="text" name="" id="" placeholder='8484HJBH3' className={styles.input} value= {datacode?.getEmployeeByEmpCode?.employeeCode}/>
              <input type="text" name="" id="" placeholder='DD/MM/YYYY' className={styles.input} value= {datacode?.getEmployeeByEmpCode?.doj} />
              <input type="text" name="" id="" placeholder='Designation' className={styles.input} value= {datacode?.getEmployeeByEmpCode?.designation}  />
          </div>

        </div>

        <div className={styles.rightinfodiv}>
          
          <div className={styles.labelsdiv}>
            <div className={styles.label}>Month</div>
            <div className={styles.label}>Days In Month</div>
            <div className={styles.label}>Days Worked</div>
            <div className={styles.label}>Leaves Taken</div>
          </div>

          <div className={styles.inputs}>
              <input type="text" name="" id="" placeholder='December'  className={styles.input}/>
              <input type="text" name="" id="" placeholder='31' className={styles.input}/>
              <input type="text" name="" id="" placeholder='31' className={styles.input}/>
              <input type="text" name="" id="" placeholder='none' className={styles.input}/>
          </div>

        </div>

      

      </div>


      <div className={styles.secondinfodiv}>

          <div className={`${styles.infooneline} ${styles.custom}`}>
            <div className={`${styles.label1} ${styles.slipheading}`}>Particulars</div>
            <div className={` ${styles.gross} ${styles.slipheading}`}>Amount</div>
            <div className={styles.paid}></div>
          </div>


          <div className={styles.infooneline}>

            <div className={styles.label1}></div>
            <div className={styles.gross}>Gross</div>
            <div className={styles.paid}>Paid</div>
            
          </div>

         


          <div className={styles.infooneline}>

            <div className={styles.label1}>Basic Salary </div>
            <div className={styles.gross}>     
            <input type="text" name="" id="" placeholder='20000' className={styles.input1} value= {datacode?.getEmployeeByEmpCode?.HRA}/> 
            </div>  
            <div className={styles.paid}>
            <input type="text" name="" id="" placeholder='20000' className={styles.input1} value= {datacode?.getEmployeeByEmpCode?.HRA}/> 
            </div>
           
          </div>


          <div className={styles.infooneline}>

            <div className={styles.label1}> HRA</div>
            <div className={styles.gross}>     
            <input type="text" name="" id="" placeholder='20000' className={styles.input1} value= {datacode?.getEmployeeByEmpCode?.HRA}/> 
            </div>  

            <div className={styles.paid}>

            <input type="text" name="" id="" placeholder='20000' className={styles.input1} value= {datacode?.getEmployeeByEmpCode?.HRA}/> 

            </div>
           
          </div>

          <div className={styles.infooneline}>

                <div className={styles.label1}>
                <input type="text" name="" id="" placeholder='Conveyance allowance' className={styles.label1edit}/> 
                </div>

                <div className={styles.gross}>     
                <input type="text" name="" id="" placeholder='-' className={styles.grossedit}/>  
                </div>  

                <div className={styles.paid}>

                <input type="text" name="" id="" placeholder='-' className={styles.input1} /> 

                </div>

          </div>

          <div className={styles.infooneline}>

<div className={styles.label1}>
<input type="text" name="" id="" placeholder='Vehicle allowance' className={styles.label1edit}/> 
</div>

<div className={styles.gross}>     
<input type="text" name="" id="" placeholder='-' className={styles.grossedit}/>  
</div>  

<div className={styles.paid}>

<input type="text" name="" id="" placeholder='20000' className={styles.input1} /> 

</div>

</div>


          <div className={`${styles.infooneline} ${styles.custom}`}>

                <div className={styles.label1}></div>
                <div className={` ${styles.gross} ${styles.slipheading}`}>Total</div>
                <div className={styles.paid}>
            <input type="text" name="" id="" placeholder='40000' className={styles.input1}/> 
              </div>  

          </div>

       </div>

       {/* this is the deductions div */}

      <div className={styles.deductions}>

            <div className={`${styles.infooneline} ${styles.custom}`}>
                <div className={`${styles.label1} ${styles.slipheading}`}>Deductions</div>
                <div className={styles.gross}></div>
                <div className={`${styles.paid} ${styles.slipheading}`}>Amount</div>
            </div>

            <div className={styles.infooneline}>

                <div className={styles.label1}>Short leaves </div>

                <div className={styles.gross}>     
                    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
                </div>
            
                <div className={styles.paid}>
                    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
                </div>
           
            </div>

            <div className={styles.infooneline}>

<div className={styles.label1}>EPF </div>

<div className={styles.gross}>     
    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
</div>

<div className={styles.paid}>
    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
</div>

</div>

<div className={styles.infooneline}>

<div className={styles.label1}>ESI </div>

<div className={styles.gross}>     
    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
</div>

<div className={styles.paid}>
    <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
</div>

</div>

            

            <div className={`${styles.infooneline} ${styles.custom}`}>
                <div className={`${styles.label1} ${styles.slipheading}`}></div>
                <div className={`${styles.gross} ${styles.slipheading} ${styles.smallslipheading}`}>Total Deductions</div>
                <div className={`${styles.paid} ${styles.slipheading}`}>
                <input type="text" name="" id="" placeholder='-' className={styles.input1}/> 
                  </div>
            </div>
         
      </div>

      <div className={styles.netpay}>

           
              <div className={styles.netpayheading}>Net Pay</div>
              <div className={styles.netamount}><input type="text" name="" id="" placeholder='-' className={styles.input1}/> </div>

         

      </div>


      <div className={styles.logodiv}>
          <div className={styles.logo}>
               <Image src="/assets/images/ezSlips.png" 
                 width="102px"
                 height="35px"
                / >
          </div>

          
      </div>




    </div>
  </div>
  
</div>

)
}

export default Slip